import React from 'react'
import './GridChooser.scss'
import {Link} from 'react-router-dom'

export default function GridChooser(props){

    const slashSplit = document.URL.split("#/")
    const begURL = slashSplit[slashSplit.length-1]

    const homeContent = props.info.map((info) => {
        
        const endPathSplit = info.path.split("/")

        console.log(endPathSplit)

        const endURL = endPathSplit[endPathSplit.length-1]

        return(
            <Link to={info.path} 
            className="section">
            {/* {console.log("begURL:" + begURL )}
            {console.log("endURL:" + endURL)} */}
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

