import React, {useState, useEffect} from 'react'
import {Dropbox} from 'dropbox'
import './ExistingClient.scss'
import {Link,} from 'react-router-dom'
import * as RouteConstants from '../../utils/RouteConstants'

//This file will pull from Dropbox or the Django Server so that we
//can get the following:
//1. the clients that have been made by an agent.
//2. the files of a client

//dbx folder naming scheme
//Client ID + Name

export default function ExistingClient(){
    
    //return true or false if the current link
    //matches with the passed route
    function pairURLPath(routeStrings, numbers){
        const urlStrings = window.location.hash.replace('#', '').split('/')
        console.log("url strings:"+urlStrings)
        console.log("route strings:"+routeStrings)
        for(var i=0; i<numbers.length; i++){
            if(urlStrings[numbers[i]]!==routeStrings[numbers[i]]){
                return false;
            }
        }
        return true;
    }

    //check the url and see which dpx folder I should pull from
    function getDbxPath () {
        const urlStrings = window.location.hash.replace('#', '').split('/')
        const acordsRoute = RouteConstants.existingClientInfo[0]['path'].split('/')
        const filesRoute = RouteConstants.existingClientInfo[1]['path'].split('/')

        if (pairURLPath(acordsRoute, [1,2,4])){
            return '/Acords'
        } else if (pairURLPath(filesRoute, [1,2,4])){
            console.log(filesRoute[3])
            return '/'+urlStrings[3].replace('_',' ')
        } else {
            return ''
        }
    }
    console.log(getDbxPath())        


    const dbx = new Dropbox({
        accessToken: '1h4MKn2TgCAAAAAAAAABYwuiXzG-l9ibyJrPECgCr7Dhe5z2awWbNTK0xjJN37OE',
        fetch
    })

    var [files, setFiles] = useState([{
        entries:['Loading...'],
        cursor:'NA'
    }])
    useEffect(() => {
        async function fetchDpx() {  
            const response = await dbx.filesListFolder({  
                path: getDbxPath(),   
                limit: 100     
            })
            setFiles([{
                entries: response.entries,
                cursor: response.cursor
            }])
        }
        fetchDpx()
    }, [])

    var [fileIndex, setFileIndex] = useState(0)
    const url = window.location.hash.replace('#', '')

    const updateDisplayedCustomers = files[fileIndex].entries.map((file, i) => { 
        // const fileName = (""+file.name).replace(/\s/g, '_')
        return (
            <li key={"dpx-link"+url+i}>
                <Link to={url + (""+file.name).replace(/\s/g, '_') + '/'}>
                    {file.name }
                </Link>
            </li>
        )
    })

    async function showSet(cursor, newFileIndex){
        const response =  await dbx.filesListFolderContinue({cursor})
        setFiles([...files,{
            entries: response.entries,
            cursor: response.cursor
        }])
        setFileIndex(newFileIndex)
        //console.log(files.cursor)
    }


    return(
        <div className="existing-client">
            <div className="headline">
                Clients
            </div>
            <ul className="list">
                {updateDisplayedCustomers}
            </ul>
            
            <button onClick={() => showSet(files[fileIndex].cursor, fileIndex-1)}> 
                prev 
            </button>
            <button onClick={() => showSet(files[fileIndex].cursor, fileIndex+1)}> 
                next 
            </button>
        </div>
    )
}