import React, {useState} from 'react'
import axios from 'axios'
import './TopAgent.scss'

export function simple(headline) {
    return(
        <div className="welcome">
            {headline}
            <hr/>
        </div>
    )
}

export function simpleWithLocation(headline, location, image){

    return(
        <div>
            <div className="img-location">
                <img
                    src={image}
                    alt={location}/> 
                <div className="txt-location">
                    {location}
                </div>
                
            </div>
            {simple(headline)}
        </div>
    )
}



