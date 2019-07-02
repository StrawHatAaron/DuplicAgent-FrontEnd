import React, {useState, useEffect} from 'react'
import {Dropbox} from 'dropbox'
import './ExistingClient.scss'

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
        return (
            <li key={file.id}>
                <img 
                    class="dbx-thumb" 
                    src={thumbnail}
                    alt="folder-thumbnail"/>
                {file.name}
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