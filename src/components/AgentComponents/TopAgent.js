import React from 'react'
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

export function client(name) {
    return(
        <div className="top-client">
            <div className="left-side">
                <div className="cust-name">ABC Customer, Inc</div>
                {name} <br/>
                916-660-6991 <br/>
                1234 56th Street, Rocklin, CA 95677 <br/>
                hello@duplicagent.com <br/>
            </div>
            <div className="right-side">
                Client ID: 012345689<br/>
                Status: (Active, Prospect, Renewal, Inactive)
            </div>
        </div>
    )
}

