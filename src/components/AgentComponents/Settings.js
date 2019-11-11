import React, {useState} from 'react'
import {ClientURL} from '../../utils/ApiConstants'
import {AuthTokenKey} from '../../utils/auth'
import axios from 'axios'
import {MaterialButton, CssTextField} from '../../utils/Constants'

export default function Settings() {

    const DivWidth = {
        width:'95%',
        margin:'1em'
    }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div style={{width:'50%', margin:'0 auto'}}>
            <div>
                <h1>Change Name</h1>
                <CssTextField style={DivWidth}
                        variant="outlined"
                        margin="normal"
                        id="first-name"
                        label="First Name"
                        name="first-name"
                        autoComplete="given-name"
                        onChange={(e) => setFirstName(e.target.value)}/>
                <CssTextField style={DivWidth}
                        variant="outlined"
                        margin="normal"
                        id="last-name"
                        label="Last Name"
                        name="last-name"
                        autoComplete="given-name"
                        onChange={(e) => setLastName(e.target.value)}/>
                <MaterialButton
                    style={{width:'50%', marginTop:'3em', marginBottom:'3em'}}
                    onClick={axios({
                        method: 'post', 
                        url: ClientURL, 
                        headers:{
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json;charset=utf-8',
                            'Access-Control-Allow-Credentials': 'true',
                            'Authorization': AuthTokenKey,
                            'Accept': 'application/json, text/plain, */*',
                            'Cache-Control': 'no-cache',
                        }, 
                        data:{
                            first_name: firstName,
                            last_name: lastName,
                        }})
                        .then((response) => {
                            console.log(response)
                            return true
                        }, (error) => {
                            alert("Network Request Error")
                            console.log(error);
                            return false
                        })}>
                    Submit
                </MaterialButton>
            </div>
            <div>
                <h1>Change Password</h1>
                <CssTextField style={DivWidth}
                        type = "password"
                        variant="outlined"
                        margin="normal"
                        id="password"
                        label="New Password"
                        name="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}/>
                <MaterialButton
                style={{width:'50%', marginTop:'3em', marginBottom:'3em'}}
                onClick={axios({
                    method: 'post', 
                    url: ClientURL, 
                    headers:{
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json;charset=utf-8',
                        'Access-Control-Allow-Credentials': 'true',
                        'Authorization': AuthTokenKey,
                        'Accept': 'application/json, text/plain, */*',
                        'Cache-Control': 'no-cache',
                    }, 
                    data:{
                        passsword: password,
                    }})
                    .then((response) => {
                        console.log(response)
                        return true
                    }, (error) => {
                        alert("Network Request Error")
                        console.log(error);
                        return false
                    })}>
                Submit
            </MaterialButton>
            </div>            
        </div>
    )
}