import React from 'react'
import './GridChooser.scss'
import {Link,} from 'react-router-dom'

export default function GridChooser(props){
    
    const homeContent = props.info.map((info, i) => {

        const baseUrl = window.location.hash.replace('#', '')
        const endPointLength = info.path.split('/').length
        const endPoint = info.path.split('/')[endPointLength-1]
        const dynamicRoute = baseUrl + endPoint + "/"

        // console.log("pathname: " + window.location.hash)
        // console.log(baseUrl)
        // console.log(endPointLength)
        // console.log(endPoint)

        return(
            <Link
                key={info.path+i} 
                to={dynamicRoute} 
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

