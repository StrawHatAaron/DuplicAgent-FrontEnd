import React, {useState} from "react"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock'
import Header from './components/LandingComponents/Header'
import Footer from './components/LandingComponents/Footer'
import {ButtonStyle, CssTextField, CustomCheckbox} from './utils/Constants'
import axios from 'axios';
import * as  ApiConstants from './utils/ApiConstants'
import Modal, {ToggleContent} from './components/Modal'

const DivWidth = {
    width:'35%',
    margin:'1em'
}

export default function SignUp(){

    const [modalText, setModalText] = useState("")

    const [checkBoxState, setCheckBoxState] = useState({
        checkedA: false,
    });

    const handleChange = name => event => {
        setCheckBoxState({ ...checkBoxState, [name]: event.target.checked });
    };

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    return(
        <>
            <Header/>
            <div style={{paddingLeft:'3em', background:'#fff'}}>
                <CssTextField style={DivWidth}
                    variant="outlined"
                    margin="normal"
                    id="first-name"
                    label="First Name"
                    name="first-name"
                    autoComplete="given-name"
                    onChange={(e) => setFirstName(e.target.value)}/>
                <br/>
                <CssTextField style={DivWidth}
                    variant="outlined"
                    margin="normal"
                    id="last-name"
                    label="Last Name"
                    name="last-name"
                    autoComplete="family-name"
                    onChange={(e) => setLastName(e.target.value)}/>
                <br/>
                <CssTextField style={DivWidth}
                    variant="outlined"
                    margin="normal"
                    id="phone"
                    label="Phone"
                    name="phone"
                    autoComplete="tel"
                    onChange={(e) => setPhone(e.target.value)}/>
                <br/>
                <CssTextField style={DivWidth}
                    variant="outlined"
                    margin="normal"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <CssTextField style={DivWidth}
                    type = "password"
                    variant="outlined"
                    margin="normal"
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <CssTextField style={DivWidth}
                    type = "password"
                    variant="outlined"
                    margin="normal"
                    id="password"
                    label="Re-Enter Password"
                    name="password"
                    autoComplete="current-password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}/>
                <br/>

                <FormControlLabel style={DivWidth}
                    value="end"
                    control={<CustomCheckbox
                        onChange={handleChange('checkedA')} 
                        checked={checkBoxState.checkedA}/>}
                    label="I Agree to Terms of Service"
                    labelPlacement="end"/>
                    
                <br/>


                <ToggleContent
                    toggle={show => 
                        <Button 
                            style={DivWidth}
                            variant="contained" 
                            color="secondary" 
                            className={ButtonStyle().button}
                            onClick={() => {
                                // if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email).valueOf){
                                //     setModalText("That is not a valid email")
                                //     show()    
                                // } 
                                if (password !== passwordConfirm){
                                    setModalText("Your passwords did not match")
                                    show()
                                } else if (!checkBoxState.checkedA){
                                    setModalText("You need to agree to the Terms Of Use")
                                    show()
                                    // window.alert("The Password that you re-entered does not match the original"); 
                                } else {
                                    axios.post(ApiConstants.SignUpUserURL, {
                                        headers: {
                                            'Access-Control-Allow-Origin': '*',
                                            'Content-Type': 'application/json',
                                        },
                                        email: email,
                                        password: password,
                                        name: firstName + lastName
                                        })
                                        .then((response) => {
                                            console.log(response)
                                            // console.log(response.status)
                                            if(response.status===200){
                                                return true
                                            }
                                        }, (error) => {
                                            console.log(error);
                                            return false
                                    })
                                }
                            }}>
                            Sign Up
                            <LockIcon className={ButtonStyle().rightIcon}/>
                        </Button>
                    }
                    content={hide => (
                        <Modal>
                        {modalText}❗<br/>
                        <button onClick={hide}>Close</button>
                        </Modal>
                    )}
                />
            </div>
            <Footer/>
        </>
    )
}