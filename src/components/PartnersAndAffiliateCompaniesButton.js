import React from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import * as Constants from '../utils/Constants'

import Link from 'react-scroll/modules/components/Link'

export default function PartnersAndAffiliateCompaniesButton(props){

    const buttonStyle = makeStyles(theme => ({
        button: {
            width:'21em',
            background: Constants.white,
            border:'2px solid #54B0F2',
            color:Constants.lightBlue,
            borderRadius:'0px',
            margin:'.5em 7em',
            fontSize: 15,
            fontFamily:Constants.fontFam,
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
            <Link activeClass="active" className="affiliates-comps" to="affiliates-comps" spy={true} smooth={true} duration={500}>Partners & Affiliate Companies</Link>
        
          
        </Button>
    
    
    
    
    );
}