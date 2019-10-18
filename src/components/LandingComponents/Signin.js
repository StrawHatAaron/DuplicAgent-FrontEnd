import React, {useState} from "react";
import './Signin.scss'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock'
// import * as Constants from '../../utils/Constants'
import auth from '../../utils/auth'
import {history} from '../../utils/history'
import * as RouteConstants from '../../utils/RouteConstants'
import {ButtonStyle, CssTextField, CustomCheckbox} from '../../utils/Constants'
import Modal, {ToggleContent} from '../Modal'

//This components handles both the style and authentication for users

const DivWidth = {
    width:'100%'
}

export default function Signin(props) {

    //design things
    const [checkBoxState, setCheckBoxState] = useState({
        checkedA: false,
    });

    const handleChange = name => event => {
        setCheckBoxState({ ...checkBoxState, [name]: event.target.checked });
    };

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [modalText, setModalText] = useState('')

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

                <CssTextField style={DivWidth}
                    variant="outlined"
                    margin="normal"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmailValue(e.target.value)} />

                <CssTextField style={DivWidth}
                    type = "password"
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

                <ToggleContent
                    toggle={show => 
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            className={ButtonStyle().button}
                            onClick={() => {
                                auth.authenticate(emailValue, passwordValue, () => {
                                    console.log("lol")
                                    history.push(RouteConstants.gridRouteInfo[0].path);
                                },
                                () => {
                                    var element = <div> Check your username and password. <br/>
                                    Invalid combination was entered❗ </div>
                                    setModalText(element)
                                    show()
                                });
                            }}
                        >
                            Sign in
                            <LockIcon className={ButtonStyle().rightIcon}/>
                        </Button>
                    }
                    content={hide => (
                        <Modal>
                            {modalText}<br/>
                            <button onClick={hide}>Close</button>
                        </Modal>
                    )}
                />
                

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

