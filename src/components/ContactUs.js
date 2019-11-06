import React ,{useState} from 'react'
import * as Constants from '../utils/Constants'
import SendIcon from '@material-ui/icons/Send'
import {MaterialButton, CssTextField} from '../utils/Constants'
import {ContactURL} from '../utils/ApiConstants'
import axios from 'axios'

 // Just That
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
                id="first-name"
                label="First Name"
                name="first-name"
                autoComplete="given-name"
                onChange={(e) => setFNameValue(e.target.value)}/>
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
                onChange={(e) => setEmailValue(e.target.value)}/>
            <CssTextField
                variant="outlined"
                margin="normal"
                className="form-control"
                name="message"
                rows="5"
                multiline={true}
                label="Message"
                onChange={(e) => setMessageValue(e.target.value)}/>
            <MaterialButton onClick={handleClick}
                variant="contained" 
                color="secondary" 
                onClick={() => {
                    console.log("hello")
                    axios.post(ContactURL, {
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
                      
                }}>
                Submit
                <SendIcon/>
            </MaterialButton>
    </div>
 )
}