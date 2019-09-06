import React from 'react'
import {SharpTextField} from '../SharpTextField'
import './NewClient.scss'
import SharpButton from '../SharpButton'

export default function NewClient(){
    return(
        <div className="new-client">
            <div className="t">
                Client Information
            </div>
            <br/>
            <div className="r">
                <div className="c">
                
                    <SharpTextField id="biz-name" label="Name Of Business" autoComplete=""/>
                    <SharpTextField id="first-name" label="First Name" autoComplete="given-name"/>
                    <SharpTextField id="last-name" label="Last Name" autoComplete="family-name"/>
                    <SharpTextField id="email" label="Email" autoComplete="email"/>
                    <SharpTextField id="" label="FEIN #" autoComplete="na"/>
                </div>
                <div className="c">
                    <SharpTextField id="phone" label="Phone #" autoComplete="tel"/>
                    <SharpTextField id="address" label="Mailing Address" autoComplete="ship-address"/>
                    <SharpTextField id="city" label="City" autoComplete="ship-city"/>
                    <SharpTextField id="state" label="State" autoComplete="ship-state"/>
                    <SharpTextField id="zip" label="Zip Code" autoComplete="ship-zip"/>
                </div>
            </div>
            <div className="t">
                System Information
            </div>
            <br/>
            <div className="r">
                <div className="c">
                    <SharpTextField id="address" label="Mailing Address" autoComplete="ship-address"/>
                    <SharpTextField id="city" label="City" autoComplete="ship-city"/>
                </div>
                <div className="c">
                    <SharpTextField id="state" label="State" autoComplete="ship-state"/>
                    <SharpTextField id="zip" label="Zip Code" autoComplete="ship-zip"/>
                </div>
            </div>
            
            <SharpButton className="button" word="Next"/>
        </div>
    )
}