import React, {useState, useEffect} from 'react'
import {Dropbox} from 'dropbox'
import './ExistingClient.scss'
import {Route} from 'react-router-dom'
import { request } from 'http';


export default function ExistingClient(){
    
    const dbx = new Dropbox({
        // accessToken: '1h4MKn2TgCAAAAAAAAABRsCmhcmfra1WDcMxOOdbdtqGtQBQ4unwlHeRorOFmEPE',
        accessToken: '1h4MKn2TgCAAAAAAAAABYwuiXzG-l9ibyJrPECgCr7Dhe5z2awWbNTK0xjJN37OE',
        fetch
    })

    var fileIndex = 0

    var [files, setFiles] = useState([{
        entries:[],
        cursor:''
    }])
    useEffect(() => {
        async function fetchDpx() {  
            const response = await dbx.filesListFolder({  
                path: '',   
                limit: 2     
            })
            setFiles([...files, {
                entries: response.entries,
                cursor: response.cursor
            }])
        }
        fetchDpx()
    }, [])

    const updateDisplayedCustomers = files[0].entries.map((file) => {
        const tagType = file['.tag']
        console.log(files)
        const urlBaseLength = document.URL.split("/")[0].length +
                document.URL.split("/")[2].length
        const initRoutingPath = document.URL.substring(urlBaseLength+2, document.URL.length)
        const fileName = (""+file.name).replace(/\s/g, '_')
        // console.log(urlBaseLength)
        // console.log(document.URL.split("/"))
        // console.log(document.URL.substring(urlBaseLength+2, document.URL.length))
        return (
            <li key={file.id}>
            {/* <Router 
                exact path={initRoutingPath+file.name.replace(/\s/g, '')}> */}
            <a href={initRoutingPath + "/" + fileName}>
                {file.name}
            </a>
            {/* </Router> */}
            </li>
        )
    })

    async function showNextCustomerSet(cursor){
        const response =  await dbx.filesListFolderContinue({cursor})
        setFiles([
            ...files,
            {
            entries: response.entries,
            cursor: [...files.cursor, response.cursor]
        }])
        fileIndex+=1
        console.log(files.cursor)
    }


    return(
        <div className="existing-client">
            <div className="headline">
                Select from existing clients:
            </div>
            <ul className="list">
                {updateDisplayedCustomers}
            </ul>
            <button onClick={() => showNextCustomerSet(files.cursor)}> prev </button>
            <button onClick={() => showNextCustomerSet(files.cursor)}> next </button>
        </div>
    )
}