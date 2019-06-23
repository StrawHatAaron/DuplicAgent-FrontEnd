import React from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import * as Constants from '../Constants'
import SendIcon from '@material-ui/icons/Send'

export default function SharpButton(props){

    const buttonStyle = makeStyles(theme => ({
        button: {
            width: '30%',
            background: Constants.white,
            border:'2px solid #54B0F2',
            color:Constants.lightBlue,
            borderRadius:'0px',
            margin:'.5em 7em',
            fontFamily:Constants.fontFam,
            width:'15em',
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
        </Button>
    );
}