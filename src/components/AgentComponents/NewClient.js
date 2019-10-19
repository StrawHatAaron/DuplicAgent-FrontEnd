import React, {useState} from 'react'
import {CssTextField, ButtonStyle} from '../../utils/Constants'
import './NewClient.scss'
import SharpButton from '../SharpButton'
import axios from 'axios'
import * as ApiConstants from '../../utils/ApiConstants'
import Button from '@material-ui/core/Button';

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
    const token = window.localStorage.getItem("AuthToken");

    const fieldContent = [
        {id:"biz-name",  label:"Name Of Business",  autoComplete:"", setter:setFein},
        {id:"first-name", label:"First Name", autoComplete:"given-name", setter:setBusinessName},
        {id:"last-name" , label:"Last Name" , autoComplete:"family-name", setter:setFirstName},
        {id:"email", label:"Email Address", autoComplete:"email", setter:setLastName},
        {id:"fein" , label:"FEIN #" , autoComplete:"na", setter:setEmails},
        {id:"phone" , label:"Phone #" , autoComplete:"tel", setter:setPhone},
        {id:"address" , label:"Mailing Address" , autoComplete:"ship-address", setter:setAddress},
        {id:"city" , label:"City" , autoComplete:"ship-city", setter:setCity},
        {id:"state" , label:"State" , autoComplete:"ship-state", setter:setState},
        {id:"zip" , label:"Zip Code" , autoComplete:"ship-zip", setter:setZipCode},
    ]

    const TextFields = fieldContent.map((c, index) => {
        return(
            <>   
                <CssTextField
                    key={"newClientTextField"+index}
                    variant="outlined"
                    margin="normal"
                    id={c.id} 
                    label={c.label} 
                    autoComplete={c.autoComplete}
                    onChange={(e) => {
                        function handleClick(e) {e.preventDefault();}
                        c.setter(e.target.value)
                    }}
                />
                <br/>
            </>
        )
    })
    
    return(
        <div className="new-client">
            <div className="t">
                Client Information
            </div>
            <br/>
            <div className="r">

                <div className="c">
                    {TextFields}
                </div>

                <div className="c">
                    
                </div>
            </div>
            
            <Button 
                onClick={
                    axios.post(ApiConstants.ClientURL, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': 'true',
                        'Authorization': 'Token ' + token
                    },
                    fein:fein,
                    business_name:businessName,
                    first_name:firstName,
                    last_name:lastName,
                    emails:emails,
                    phone:phone,
                    address:address,
                    city:city,
                    state:state,
                    zip_code:zipCode,
                    tags:[1],
                })
                .then((response) => {
                    console.log(response)
                    if(response.status===200){
                        
                    }
                }, (error) => {
                    console.log("why is this being called");
                    console.log(error);
                    return false
                })}

                variant="contained" 
                color="secondary" >

                    Create Client

                </Button>
        </div>
    )
}