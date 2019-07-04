import React from 'react'
import NewBusinessImg from '../../img/routing/NewBusisnessImg.png'
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

export function topClient() {
    return(
        <div className="top-client">
            
        </div>
    )
}

