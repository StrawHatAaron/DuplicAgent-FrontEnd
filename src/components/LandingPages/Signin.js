import React from "react";
import './Signin.scss'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import {withStyles, makeStyles,} from '@material-ui/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock'
import DeleteIcon from '@material-ui/icons/Delete';

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

const checkBoxStyles = theme => ({
    root: {
        '&$checked': {
            color: '#54B0F2',
        },
    },
    checked: {},
});
const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const buttonStyle = makeStyles(theme => ({
    button: {
        width: '100%',
        background:'#54B0F2',
        '&:hover':{
            background: '#DE6D43'
        }
    },
    rightIcon: {
        fontSize: 20,
    },
}));

export default function Signin() {
    const [state, setState] = React.useState({
        checkedA: false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const classes = buttonStyle();

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
                <CssTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"/>
                <CssTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="current-password"/>

                <FormControlLabel
                    value="end"
                    control={<CustomCheckbox
                        onChange={handleChange('checkedA')}
                        checked={state.checkedA}/>}
                    label="End"
                    labelPlacement="end"
                />

                <Button variant="contained" color="secondary" className={classes.button}>
                    Sign in
                    <LockIcon className={classes.rightIcon} />
                </Button>

                <div className="account-help-link">
                    Username or Password help?
                </div>

                <div className="terms-accept">
                    By clicking Sign in, you agree to the
                    DUPLICAGENT Terms of Service, DUPLICAGENT Terms of use
                    and have read and acknowledged our Privacy Statement.
                </div>
            </div>
        </div>
    )
}