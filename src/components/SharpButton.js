import React from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import * as Constants from '../utils/Constants'
import {Route} from 'react-router-dom'


export default function SharpButton(props){

    const buttonStyle = makeStyles(theme => ({
        button: {
            width:'15em',
            background: Constants.white,
            border:'2px solid #54B0F2',
            color:Constants.lightBlue,
            borderRadius:'0px',
            margin:'.5em 7em',
            fontFamily:Constants.fontFam,
            justifyContent: 'center',
            '&:hover':{
                background: '#FEFEFE'
            }
        }
    }));

    const classes = buttonStyle();
    return(
        <Route render={({ history}) => (
            <Button
                onClick={() => { history.push(props.link) }} 
                variant="contained" 
                color="secondary" 
                className={classes.button}>
                {props.word}
            </Button>
        )} />
        
    );
}