import React, {useState} from "react";
import {withRouter} from 'react-router-dom'
import './Signin.scss'
import Checkbox from '@material-ui/core/Checkbox';
import {withStyles,} from '@material-ui/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock'
import SharpTextField from '../SharpTextField'
import * as Constants from '../../utils/Constants'
// import {auth, authButton} from '../AuthHelpers'
import Login from './Login'


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
            <div className="flex-form">
                <SharpTextField
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"/>
                <SharpTextField
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="current-password"/>
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
                    className={buttonStyle.button}>
                    Sign in
                    <LockIcon className={buttonStyle.rightIcon}/>
                </Button>
                        
                <div>
                    ummmmm.....
                </div>

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
