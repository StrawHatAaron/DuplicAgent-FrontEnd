import React, {useState} from 'react'
import {Dropbox} from 'dropbox'
import AgentHeader from '../../components/AgentComponents/AgentHeader'


export default function AgentHome(){
    const dbx = new Dropbox({
        accessToken: '1h4MKn2TgCAAAAAAAAABRsCmhcmfra1WDcMxOOdbdtqGtQBQ4unwlHeRorOFmEPE',
        fetch
    })
    
    const fileListElem = document.querySelector('.js-file-list')

    const [state, setState] = useState({
        files: []
    })

    
    const init = () => {                
        dbx.filesListFolder({
            path: ''
        }).then(res => {
            updateFiles(res.entries)
        })
    }
    
    const updateFiles = files => {
      setState([...state.files, ...files]) 
      renderFiles()
    }
    
    const renderFiles = () => {
        setState(state.files.sort((a, b) => {
            // sort alphabetically, folders first
            if ((a['.tag'] === 'folder' || b['.tag'] === 'folder')
                && !(a['.tag'] === b['.tag'])) {
                return a['.tag'] === 'folder' ? -1 : 1
            } else {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
            }
            })
            .map(file => {
            const type = file['.tag']
            return (<li class={`dbx-list-item ${type}`} >`{file.name}</li>)
        }).join(''))
    }
    
    return(
        <body>
            <AgentHeader/>

            

            {init()}

            <div>{state.files}</div>
            {console.log("hello world")}

        </body>
    )
}