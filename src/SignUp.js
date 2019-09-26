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
    width:'95%',
    margin:'1em'
}

export default function SignUp(){

    const OuterStyle = {
        background:'#fff', 
        display: 'grid', 
        gridTemplateColumns: '.5fr 1fr .5fr', 
        gridTemplateRows: '1', 
        height:'60em'
    }

    const SignUpStyle = {
        border: '1px solid #C4C4C4',
        boxSizing:'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        height:'50em',
        marginTop:'5em'
    }

    const [checkBoxState, setCheckBoxState] = useState({
        checkedA: false,
    });
    const handleChange = name => event => {
        setCheckBoxState({ ...checkBoxState, [name]: event.target.checked });
    };
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [modalText, setModalText] = useState("")

    return(
        <>
            <Header/>
            <div style={OuterStyle}>
            {/* <div></div> */}
            <div style={SignUpStyle}>
                <h1>We just need a little info to get you started</h1>
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
                                // alert(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
                                if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))){
                                    setModalText("That is not a valid email")
                                    show()    
                                } else if (password !== passwordConfirm){
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
            {/* <div></div> */}
            </div>
            <Footer/>
        </>
    )
}