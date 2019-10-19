import React, {useState} from 'react'
import {CssTextField} from '../../utils/Constants'
import './NewClient.scss'
import {MaterialButton} from '../../utils/Constants'
import axios from 'axios'
import {ClientURL} from '../../utils/ApiConstants'
import {AuthTokenKey} from '../../utils/auth'

export default function NewClient(){

    const [fein, setFein] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emails, setEmails] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const token = window.localStorage.getItem(AuthTokenKey);
    
    return(
        <div className="new-client">
            <div className="t">
                Client Information
            </div>
            <br/>
            <div className="r">
                <div className="c">
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="biz-name" 
                        label="Name Of Business" 
                        autoComplete=""
                        onChange={(e) => setBusinessName(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="first-name" 
                        label="First Name" 
                        autoComplete="given-name"
                        onChange={(e) => setFirstName(e.target.value)}/>
                    <br/>
                    <CssTextField
                        variant="outlined"
                        margin="normal" 
                        id="last-name" 
                        label="Last Name" 
                        autoComplete="family-name"
                        onChange={(e) => setLastName(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setEmails(e.target.value)}/>
                    <br/>
                    <CssTextField
                        variant="outlined"
                        margin="normal" 
                        id="" 
                        label="FEIN #" 
                        autoComplete="na"
                        onChange={(e) => setFein(e.target.value)}/>
                    <br/>
                </div>
                <div className="c">
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="phone" 
                        label="Phone #" 
                        autoComplete="tel"
                        onChange={(e) => setPhone(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="address" 
                        label="Mailing Address" 
                        autoComplete="ship-address"
                        onChange={(e) => setAddress(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="city" 
                        label="City" 
                        autoComplete="ship-city"
                        onChange={(e) => setCity(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="state" 
                        label="State" 
                        autoComplete="ship-state"
                        onChange={(e) => setState(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="zip" 
                        label="Zip Code" 
                        autoComplete="ship-zip"
                        onChange={(e) => setZipCode(e.target.value)}/>
                    <br/>
                </div>
            </div>
            
            <MaterialButton
                style={{width:'75%', marginTop:'3em', marginBottom:'3em'}}
                onClick={ () => (axios.post(ClientURL, {
                    headers: {
                        'Host': 'localhost:8000',
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                        'Access-Control-Allow-Credentials': 'true',
                        'Authorization': 'Token ' + token,

                        'Accept': '*/*',
                        
                        'Accept-Encoding': 'gzip, deflate',
                        // Content-Length: 1298
                        'Connection': 'keep-alive',
                        'Cache-Control': 'no-cache',
                        
                    },
                    fein:fein,
                    business_name:businessName,
                    first_name:firstName,
                    last_name:lastName,
                    emails:emails,
                    phone:6149059,
                    address:address,
                    city:city,
                    state:state,
                    zip_code:123,
                    tags:[1],
                })
                .then((response) => {
                    console.log(response)
                    return true
                }, (error) => {
                    console.log("why is this being called");
                    console.log(error);
                    return false
                }))}
            >
                Next
            </MaterialButton>
        </div>
    )
}