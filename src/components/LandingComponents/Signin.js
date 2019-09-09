import React, {useState} from "react";
import './Signin.scss'
import Checkbox from '@material-ui/core/Checkbox';
import {withStyles,} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock'
import * as Constants from '../../utils/Constants'
import axios from 'axios'
import {Redirect, Route, browserHistory} from 'react-router-dom'
import AgentRouter from '../../pages/AgentPages/AgentRouter'
import auth from '../../auth'
import {history} from '../../history'
//This components handles both the style and authentication for users

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#DE6D43',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#54B0F2',
            },
            '&:hover fieldset': {
                borderColor: '#003142',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#DE6D43',
            },
        },
    },
})(TextField);

const DivWidth = {
    width:'100%'
}

const checkBoxStyles = theme => ({
    root: {
        '&$checked': {
            color: '#54B0F2',
        },
    },
    checked: {},
});
const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);



export default function Signin(props) {

    //design things
    const [checkBoxState, setCheckBoxState] = useState({
        checkedA: false,
    });

    const handleChange = name => event => {
        setCheckBoxState({ ...checkBoxState, [name]: event.target.checked });
    };

    const buttonStyle = Constants.ButtonStyle();
    // const classes = Constants.


    // window.localStorage.setItem(false, "SignedIn")

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [signedIn, setSignedIn] = useState(false)


    return(
        <div className="sign-section">

            {/* <PrivateRoute path="/protected" component={() => <AgentRouter/>} /> */}

            <div className="sign-in">
                Sign in
            </div>

            <div className="lil-explain">
                View your account. Sign in to Management Solutions to access your products and tools.
            </div>
            <div className="learn-more">
                Learn More
            </div>
            <div className="flex-form">

                <CssTextField style={DivWidth}
                    variant="outlined"
                    margin="normal"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmailValue(e.target.value)} />

                <CssTextField style={DivWidth}
                    variant="outlined"
                    margin="normal"
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="current-password"
                    onChange={(e) => setPasswordValue(e.target.value)}/>
                    
                <FormControlLabel
                    value="end"
                    control={<CustomCheckbox
                        onChange={handleChange('checkedA')} 
                        checked={checkBoxState.checkedA}/>}
                    label="Remember Me"
                    labelPlacement="end"/>


                <Button 
                    variant="contained" 
                    color="secondary" 
                    className={buttonStyle.button}
                    onClick={() => {
                        auth.login(() => {
                            history.push("/Agent");
                        });
                    }}
                >
                    Sign in
                    <LockIcon className={buttonStyle.rightIcon}/>
                </Button>

                <div className="account-help-link">
                    Username or Password help?
                </div>

                <div className="terms-accept">
                    By clicking Sign in, you agree to the
                    DUPLICAGENT Terms of Service, DUPLICAGENT Terms of use
                    and have read and acknowledged our Privacy Statement.
                </div>

                <div>
                    Awesome Customer Support    
                </div>
            </div>
        </div>
    )
}

