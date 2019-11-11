import React from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import * as Constants from '../utils/Constants'

import Link from 'react-scroll/modules/components/Link'

export default function ContactUsButton(props){

    const buttonStyle = makeStyles(theme => ({
        button: {
            width:'9em',
            background: Constants.white,
            border:'2px solid #54B0F2',
            color:Constants.lightBlue,
            borderRadius:'0px',
            margin:'.5em 7em',
            fontFamily:Constants.fontFam,
            fontSize: 15,
            justifyContent: 'center',
            '&:hover':{
                background: '#FEFEFE'
            }
        }
    }));

    const classes = buttonStyle();
    return(
        <Button 
            variant="contained" 
            color="secondary" 
            className={classes.button}>
            {props.word}
            <Link activeClass="active" className="contact-us" to="contact-us" spy={true} smooth={true} duration={500}>Contact Us</Link>
        
          
        </Button>
    
    
    
    
    );
}