import React, {useState, useEffect} from 'react'
import {Dropbox} from 'dropbox'
import AgentHeader from '../../components/AgentComponents/AgentHeader'
import { stat, watchFile } from 'fs';



export default function AgentHome(){

    const dbx = new Dropbox({
        accessToken: '1h4MKn2TgCAAAAAAAAABRsCmhcmfra1WDcMxOOdbdtqGtQBQ4unwlHeRorOFmEPE',
        fetch
    })

    var [files, setFiles] = useState({
        data: []
    })

    useEffect(() => {

        const getFiles = async () => {  
            const response = await dbx.filesListFolder({  
                path: '',   
                limit: 4  
            })
            
            setFiles(response)
            console.log(response)
            
        }
        getFiles()
        return () => {}
    }, [])


    
    
    return(
        <body>
            <AgentHeader/>

            <div>hello</div>            

            {/* <div>{files.map((c) => {return(<div>lol</div>)})}</div> */}

        </body>
    )
}