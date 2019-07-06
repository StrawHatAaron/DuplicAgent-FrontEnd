import React, {useState, useEffect} from 'react'
import {Dropbox} from 'dropbox'
import './ExistingClient.scss'
import {Route} from 'react-router-dom'

export default function ExistingClient(){
    
    const dbx = new Dropbox({
        accessToken: '1h4MKn2TgCAAAAAAAAABRsCmhcmfra1WDcMxOOdbdtqGtQBQ4unwlHeRorOFmEPE',
        fetch
    })

    var [files, setFiles] = useState([{},])
    useEffect(() => {
        // const getMoreFiles = async (cursor, callback) => {  
        //     // request further files from where the previous call finished  
        //     const response = await dbx.filesListFolderContinue({ cursor })
        //     // if a callback is provided we call it  
        //     if (callback) callback(response)
        //     if (response.has_more) {  
        //       // if there are more files, call getMoreFiles recursively,  
        //       // providing the same callback.  
        //       await getMoreFiles(response.cursor, callback)  
        //     }  
        // }

        async function fetchDpx() {  
            const response = await dbx.filesListFolder({  
                path: '',   
                limit: 5     
            })

            // We can perform a custom action with received files  
            // processFiles(response.entries)
            // if (response.has_more) {  
            //     // provide a callback for the newly received entries   
            //     // to be processed  
            //     console.log('has more')
            //     getMoreFiles(response.cursor, more => more.entries)  
            // } 
            //note need to wait for DOM to refresh so 
            //logging it here will not show a change

            setFiles(response.entries)
        }    
        fetchDpx()
    }, [])


    const displayCustomers = files.map((file) => {
        var tagType = file['.tag']
        // console.log(tagType)

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



    return(
        <div className="existing-client">
            <div className="headline">
                Select from existing clients:
            </div>
            <ul className="list">
                {displayCustomers}
            </ul>
        </div>
    )
}