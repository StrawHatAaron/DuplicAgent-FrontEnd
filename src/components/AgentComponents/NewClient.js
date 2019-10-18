import React, {useState} from 'react'
import {CssTextField} from '../../utils/Constants'
import './NewClient.scss'
import SharpButton from '../SharpButton'

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


    const [form, setValues] = useState({
        fein: '',
        businessName: '',
        firstName: '',
        lastName: '',
        emails: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
    })

    const updateField = e => {
        setValues({
          ...form,
          [e.target.name]: e.target.value
        });
      };
    
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
                        onChange={updateField}/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="first-name" 
                        label="First Name" 
                        autoComplete="given-name"
                        onChange={(e) => setFirstName(e.target.value)}/>
                    <CssTextField
                        variant="outlined"
                        margin="normal" 
                        id="last-name" 
                        label="Last Name" 
                        autoComplete="family-name"
                        onChange={(e) => setLastName(e.target.value)}/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"/>
                    <CssTextField
                        variant="outlined"
                        margin="normal" 
                        id="" 
                        label="FEIN #" 
                        autoComplete="na"
                        onChange={(e) => setFein(e.target.value)}/>
                </div>
                <div className="c">
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="phone" 
                        label="Phone #" 
                        autoComplete="tel"
                        onChange={(e) => setPhone(e.target.value)}/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="address" 
                        label="Mailing Address" 
                        autoComplete="ship-address"
                        onChange={(e) => setAddress(e.target.value)}/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="city" 
                        label="City" 
                        autoComplete="ship-city"
                        onChange={(e) => setCity(e.target.value)}/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="state" 
                        label="State" 
                        autoComplete="ship-state"
                        onChange={(e) => setState(e.target.value)}/>
                    <CssTextField 
                        variant="outlined"
                        margin="normal"
                        id="zip" 
                        label="Zip Code" 
                        autoComplete="ship-zip"
                        onChange={(e) => setZipCode(e.target.value)}/>
                </div>
            </div>
            {/* <div className="t">
                System Information
            </div>
            <br/>
            <div className="r">
                <div className="c">
                    <CssTextField id="address" label="Mailing Address" autoComplete="ship-address"/>
                    <CssTextField id="city" label="City" autoComplete="ship-city"/>
                </div>
                <div className="c">
                    <CssTextField id="state" label="State" autoComplete="ship-state"/>
                    <CssTextField id="zip" label="Zip Code" autoComplete="ship-zip"/>
                </div>
            </div> */}
            
            <SharpButton className="button" word="Next"/>
        </div>
    )
}