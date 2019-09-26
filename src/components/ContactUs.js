import React from 'react'
import * as Constants from '../utils/Constants'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import {CssTextField} from '../utils/Constants'

 
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
    return(
        <div style={OutLineStyles}>
            <CssTextField
                variant="outlined"
                margin="normal"
                id="first-name"
                label="First Name"
                name="first-name"
                autoComplete="given-name"/>
            <CssTextField
                variant="outlined"
                margin="normal"
                id="last-name"
                label="Last Name"
                name="last-name"
                autoComplete="family-name"/>
            <CssTextField
                variant="outlined"
                margin="normal"
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="tel"/>
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
                className="form-control"
                name="message"
                rows="5"
                multiline={true}
                label="Message"/>
            <Button onClick={handleClick}
                variant="contained" 
                color="secondary" 
                className={buttonStyle.button}>
                Submit
                <SendIcon className={buttonStyle.rightIcon}/>
            </Button >
    </div>
 )
}