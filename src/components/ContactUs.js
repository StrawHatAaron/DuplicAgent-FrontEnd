import React from 'react'
import SharpTextField from './SharpTextField'
import * as Constants from '../Constants'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'

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

export default function ContactUs(){
    const buttonStyle = Constants.ButtonStyle();
    return(
        <div style={OutLineStyles}>
            <SharpTextField
                id="first-name"
                label="First Name"
                name="first-name"
                autoComplete="given-name"/>
            <SharpTextField
                id="last-name"
                label="Last Name"
                name="last-name"
                autoComplete="family-name"/>
            <SharpTextField
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="tel"/>
             <SharpTextField
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"/>
             <SharpTextField
                multiline={true}
                label="Message"/>
            
            <Button 
                variant="contained" 
                color="secondary" 
                className={buttonStyle.button}>
                Submit
                <SendIcon className={buttonStyle.rightIcon}/>
            </Button>
            
        </div>
    )
}