import React from "react";
import './Signin.scss'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

export default function Signin() {
    const classes = useStyles();

    var materialButtonStyle = {
        width: '80%'
    };

    return(
        <div className="sign-section">
            <div className="sign-in">
                Sign in
            </div>
            <div className="lil-explain">
                View your account. Sign in to Management Solutions to access your products and tools.
            </div>
            <div className="learn-more">
                Learn More
            </div>
            <hr/>
            <TextField
                variant="outlined"
                margin="normal"
                required
                style={materialButtonStyle}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                className="text-field"
            />
            <Button className={classes.root}>Hook</Button>
        </div>
    )
}