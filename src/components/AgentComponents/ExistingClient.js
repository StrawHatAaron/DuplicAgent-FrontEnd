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

    var [files, setFiles] = useState([{
        entries:['Loading...'],
        cursor:'NA'
    }])
    useEffect(() => {
        async function fetchDpx() {  
            const response = await dbx.filesListFolder({  
                path: '',   
                limit: 2     
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
        const tagType = file['.tag']
        console.log("-----------")
        console.log("the file index:"+fileIndex)
        console.log(files)
        console.log(file)
        console.log("-----------")
        const urlBaseLength = document.URL.split("/")[0].length +
                document.URL.split("/")[2].length
        const initRoutingPath = document.URL.substring(urlBaseLength+2, document.URL.length)
        const fileName = (""+file.name).replace(/\s/g, '_')
        return (
            <li key={file.id}>
            <a href={initRoutingPath + "/" + fileName}>
                {file.name}
            </a>
            </li>
        )
    })

    async function showNextCustomerSet(cursor){
        const response =  await dbx.filesListFolderContinue({cursor})
        setFiles([...files,{
            entries: response.entries,
            cursor: response.cursor
        }])
        setFileIndex(fileIndex+1)
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
            <button onClick={() => {
                console.log(files)
                showNextCustomerSet(files[fileIndex].cursor)
                }}> prev </button>
            <button onClick={() => showNextCustomerSet(files[fileIndex].cursor)}> next </button>
        </div>
    )
}