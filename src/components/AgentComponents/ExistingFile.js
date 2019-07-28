import React, {useState, useEffect} from 'react'
import {Dropbox} from 'dropbox'
import './ExistingClient.scss'
import {Link, Switch, Route} from 'react-router-dom'

//This file will pull from Dropbox or the Django Server so that we
//can get the following:
//1. the clients that have been made by an agent.
//2. the files of a client

//dbx folder naming scheme
//Client ID + Name

export default function ExistingFile(){
    
    console.log()


    const dbx = new Dropbox({
        // accessToken: '1h4MKn2TgCAAAAAAAAABRsCmhcmfra1WDcMxOOdbdtqGtQBQ4unwlHeRorOFmEPE',
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
                path: '',   
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

    const updateDisplayedCustomers = files[fileIndex].entries.map((file) => {
        const urlBaseLength = document.URL.split("/")[0].length +
                document.URL.split("/")[2].length
        const initRoutingPath = document.URL.substring(urlBaseLength+4, document.URL.length)
        const fileName = (""+file.name).replace(/\s/g, '_')

        // console.log(initRoutingPath)
        // console.log(fileName)

        return (
            <li key={file.id}>
                <Link to={initRoutingPath + fileName}>
                    {file.name+" this is pretty cool"}
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
        console.log(files.cursor)
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