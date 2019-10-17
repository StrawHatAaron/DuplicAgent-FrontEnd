import './SignUp.scss'
import React, {useState} from "react"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'
import LockIcon from '@material-ui/icons/Lock'
import Header from './Header'
import Footer from './Footer'
import {ButtonStyle, CssTextField, CustomCheckbox} from '../../utils/Constants'
import axios from 'axios';
import * as  ApiConstants from '../../utils/ApiConstants'
import Modal, {ToggleContent} from '../Modal'
import {signInPath} from '../../utils/RouteConstants'
//-_-   -_-    -_-


export default function SignUp(){

    const DivWidth = {
        width:'95%',
        margin:'1em'
    }

    const OuterStyle = {
        background:'#fff', 
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'60em'
    }

    const SignUpStyle = {
        border: '1px solid #C4C4C4',
        boxSizing:'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        width:'800px'
    }

    const BigDiv = {
        margin: '2em 5em',
        border: '1px solid #868585',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
        <div 
            className='the-big-div'
            key="SignUp-1">

            <Header word="Sign In" link={signInPath}/>
                <div style={OuterStyle}>
                <div style={SignUpStyle}>
                    <div style={{fontSize:'2.5rem', textAlign:'center', margin:'1em'}}>
                        We just need a little info to get you started
                    </div>
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
                        id="password-confirm"
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
                                style={{width:'95%', margin:'2em'}}
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
                                                if(response.status===201){
                                                    setModalText('Your account has ben successfully created')
                                                    show()
                                                    return true
                                                }
                                            }, (error) => {
                                                setModalText(error.response.data['email'])
                                                show()
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
        </div>
    )
}