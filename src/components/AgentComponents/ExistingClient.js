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
        async function fetchDpx() {  
            const response = await dbx.filesListFolder({  
                path: '',   
                limit: 8     
            })
            //note need to wait for DOM to refresh so 
            //logging it here will not show a change
            setFiles(response.entries)
        }    
        fetchDpx()
    }, [])


    const displayCustomers = files.map((file) => {
        let thumbnail
        var tagType = file['.tag']
        console.log(tagType)
        if (tagType == 'folder'){
            console.log("what is going on")
            thumbnail = file.thumbnail
            ? `data:image/jpeg;base64, ${file.thumbnail}`
            : `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWZpbGUiPjxwYXRoIGQ9Ik0xMyAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWOXoiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxMyAyIDEzIDkgMjAgOSI+PC9wb2x5bGluZT48L3N2Zz4=`
        } else {
            console.log("what is going on2")
            thumbnail = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWZvbGRlciI+PHBhdGggZD0iTTIyIDE5YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmg1bDIgM2g5YTIgMiAwIDAgMSAyIDJ6Ij48L3BhdGg+PC9zdmc+`
        }

        const urlBaseLength = document.URL.split("/")[0].length +
                document.URL.split("/")[2].length
        const initRoutingPath = document.URL.substring(urlBaseLength+2, document.URL.length)
        const fileName = file.name.replace(/\s/g, '')

        console.log(urlBaseLength)
        console.log(document.URL.split("/"))
        console.log(document.URL.substring(urlBaseLength+2, document.URL.length))
        return (
            <li key={file.id}>
            {/* <Router 
                exact path={initRoutingPath+file.name.replace(/\s/g, '')}> */}
            <a href={initRoutingPath + "/" + fileName}>
                
                    <img 
                        class="dbx-thumb" 
                        src={thumbnail}
                        alt="folder-thumbnail"/>
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