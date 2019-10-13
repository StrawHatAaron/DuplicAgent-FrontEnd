import React, {useState} from 'react'
import * as Constants from '../utils/Constants'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import {CssTextField} from '../utils/Constants'
import axios from 'axios'
import * as ApiConstants from '../utils/ApiConstants'
 
const OutLineStyles = {
    margin: '1em',
    border: '1px solid #C4C4C4',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    textAlign: 'center',
    display:'flex',
    flexDirection:'column',
    padding:'6em'
}
 
function handleClick(){
    console.log('I was clicked')
} 
 
export default function ContactUs(){
    const buttonStyle = Constants.ButtonStyle();
    const [emailValue, setEmailValue] = useState('')
    const [fnameValue, setFNameValue] = useState('')
    const [lnameValue, setLNameValue] = useState('')
    const [messageValue, setMessageValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
 
    return(
        <div style={OutLineStyles}>
            <CssTextField
                variant="outlined"
                margin="normal"
                id="first-name"
                label="First Name"
                name="first-name"
                autoComplete="family-name"
                onChange={(e) => setFNameValue(e.target.value)}
                />
            <CssTextField
                variant="outlined"
                margin="normal"
                id="last-name"
                label="Last Name"
                name="last-name"
                autoComplete="family-name"
                onChange={(e) => setLNameValue(e.target.value)}/>
            <CssTextField
                variant="outlined"
                margin="normal"
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="tel"
                onChange={(e) => setPhoneValue(e.target.value)}/>
            <CssTextField
                variant="outlined"
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmailValue(e.target.value)}
                />
            <CssTextField
                variant="outlined"
                margin="normal"
                className="form-control"
                name="message"
                rows="5"
                multiline={true}
                label="Message"
                onChange={(e) => setMessageValue(e.target.value)}/>
            <Button onClick={handleClick}
                variant="contained" 
                color="secondary" 
                className={buttonStyle.button}
                onClick={() => {
                    axios.post(ApiConstants.ContactURL, {
                        firstName: fnameValue,
                        lastName: lnameValue,
                        phone: phoneValue,
                        email: emailValue,
                        message: messageValue,
                      })
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                      
                }}
            >
                Submit
                <SendIcon className={buttonStyle.rightIcon}/>
            </Button >
    </div>
 )
}

