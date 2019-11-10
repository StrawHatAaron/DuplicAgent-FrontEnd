import React, {useState} from 'react'
import axios from 'axios'
import {CssTextField, MaterialButton} from '../../utils/Constants'
import {ClientURL} from '../../utils/ApiConstants'
import {homeInfo} from '../../utils/RouteConstants'
import {history} from '../../utils/history'
import {AuthTokenKey} from '../../utils/auth'
import Modal, {ToggleContent} from '../Modal'
import './NewClient.scss'

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
    
    //console.log(AuthTokenKey)

    
    const TextWidth = {
        width: '100%'
    }

    return(
        <div className="new-client">
            <div className="t">
                Client Information
            </div>
            <br/>
            <div className="r">
                <div className="c">
                    <CssTextField
                        style={TextWidth} 
                        variant="outlined"
                        margin="normal"
                        id="biz-name" 
                        label="Name Of Business" 
                        autoComplete=""
                        onChange={(e) => setBusinessName(e.target.value)}/>
                    <br/>
                    <CssTextField
                        style={TextWidth} 
                        variant="outlined"
                        margin="normal"
                        id="first-name" 
                        label="First Name" 
                        autoComplete="given-name"
                        onChange={(e) => setFirstName(e.target.value)}/>
                    <br/>
                    <CssTextField
                        style={TextWidth}
                        variant="outlined"
                        margin="normal" 
                        id="last-name" 
                        label="Last Name" 
                        autoComplete="family-name"
                        onChange={(e) => setLastName(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => setEmails(e.target.value)}/>
                    <br/>
                    <CssTextField
                        style={TextWidth}
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
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="phone" 
                        label="Phone #" 
                        autoComplete="tel"
                        onChange={(e) => setPhone(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="address" 
                        label="Mailing Address" 
                        autoComplete="ship-address"
                        onChange={(e) => setAddress(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="city" 
                        label="City" 
                        autoComplete="ship-city"
                        onChange={(e) => setCity(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="state" 
                        label="State" 
                        autoComplete="ship-state"
                        onChange={(e) => setState(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="zip" 
                        label="Zip Code" 
                        autoComplete="ship-zip"
                        onChange={(e) => setZipCode(e.target.value)}/>
                    <br/>
                </div>
            </div>
            <ToggleContent
                content={hide => (
                    <Modal>
                        Client has been created❗<br/>
                        <button onClick={hide}>
                            Close
                        </button>
                    </Modal>
                )}
                toggle={show => 
                    <MaterialButton
                        style={{width:'75%', marginTop:'3em', marginBottom:'3em'}}
                        onClick={() => (axios({
                            method: 'post', 
                            url: ClientURL, 
                            headers:{
                                'Access-Control-Allow-Origin': '*',
                                'Content-Type': 'application/json;charset=utf-8',
                                'Access-Control-Allow-Credentials': 'true',
                                'Authorization': AuthTokenKey,
                                'Accept': 'application/json, text/plain, */*',
                                'Cache-Control': 'no-cache',
                            }, 
                            data:{
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
                            }})
                            .then((response) => {
                                console.log(response)
                                alert('client ' + firstName + ' ' + lastName + ' with business ' + businessName + ' was properly created')
                                history.push(homeInfo[0].path)
                            }, (error) => {
                                console.log(error);
                                return false
                            })
                        )}>
                    Next
                </MaterialButton>
            }
        />
        </div>
    )
}