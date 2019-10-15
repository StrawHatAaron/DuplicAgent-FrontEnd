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
    const [email, setEmailValue] = useState('')
    const [fname, setFNameValue] = useState('')
    const [lname, setLNameValue] = useState('')
    const [message, setMessageValue] = useState('')
    const [phone, setPhoneValue] = useState('')
 
    return(
        <div style={OutLineStyles}>
            <CssTextField
                variant="outlined"
                margin="normal"
                id="fname"
                label="First Name"
                name="fname"
                autoComplete="family-name"
                onChange={(e) => setFNameValue(e.target.value)}
                />
            <CssTextField
                variant="outlined"
                margin="normal"
                id="lname"
                label="Last Name"
                name="lname"
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
            <Button
                variant="contained" 
                color="secondary" 
                className={buttonStyle.button}
                onClick={() => {
                    console.log("hello")
                    axios.post(ApiConstants.ContactURL, {
                        //Look up what this does PAWAN
                        //Look up regular expression for password
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                        },
                        fname: fname,
                        lname: lname,
                        phone: phone,
                        email: email,
                        message: message,
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

