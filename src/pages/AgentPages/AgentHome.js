import React, {useState, useEffect} from 'react'
import {Dropbox} from 'dropbox'
import AgentHeader from '../../components/AgentComponents/AgentHeader'
import { stat } from 'fs';



export default function AgentHome(){

    const dbx = new Dropbox({
        accessToken: '1h4MKn2TgCAAAAAAAAABRsCmhcmfra1WDcMxOOdbdtqGtQBQ4unwlHeRorOFmEPE',
        fetch
    })

    var [files, setFiles] = useState({
        data: []
    })

    useEffect(() => {
        let mounted = true

        const getFiles = async () => {  
            const response = await dbx.filesListFolder({  
                path: '',   
                limit: 4  
            })
            if (mounted){
                // console.log(response)
                setFiles({
                    data: response
                })
                console.log(files)
            }   
        }
        getFiles()
        return () => {
            mounted = false;
        }
    }, [])


    

  
      
    console.log("how many times")
    
    
    return(
        <body>
            <AgentHeader/>

            <div>hello</div>            

            {/* <div>{files.map((c) => {return(<div>lol</div>)})}</div> */}

        </body>
    )
}