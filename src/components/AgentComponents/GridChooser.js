import React from 'react'
import './GridChooser.scss'
import {Link,} from 'react-router-dom'

export default function GridChooser(props){

    if(props.storeData==='Client Name'){
        window.localStorage.setItem(props.storeData, "Aaron Miller")
            console.log("Storing Client Data")    
    }   
    
    const homeContent = props.info.map((info, i) => {
        // console.log("pathname: " + window.location.hash)
        var url = window.location.hash.replace('#', '')
        // console.log(url)
        return(
            <Link
                key={info.path+i} 
                to={info.path} 
                className="section">

                <img
                    src={info.icon}
                    alt={info.title}/>
                <div className="title">
                    {info.title}
                </div>
                <div className="explanation">
                    {info.explanation}
                </div>
            </Link>
        )
    })


    return(
        <div className="grid-choose">
            {homeContent}
        </div>
    )
}

