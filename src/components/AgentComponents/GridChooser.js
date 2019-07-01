import React from 'react'
import './GridChooser.scss'
import {Link} from 'react-router-dom'

export default function GridChooser(props){
    const homeContent = props.info.map((info) => {
        return(
            <Link to={info.path.replace(/\s/g, "")} className="section">
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