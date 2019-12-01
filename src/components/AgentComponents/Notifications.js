import React, {useState, useEffect} from 'react'
import {PolicyURL, ClientURL} from '../../utils/ApiConstants'
import {AuthTokenKey} from '../../utils/auth'
import axios from 'axios'
import {MaterialButton} from '../../utils/Constants'

export default function Notifications() {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': AuthTokenKey,
        'Accept': 'application/json, text/plain, */*',
        'Cache-Control': 'no-cache',
    }

    const [policies, setPolicies] = useState([])
    useEffect(() => {
        axios({
            method: 'get', 
            url: PolicyURL, 
            headers: headers
        }).then((response) => {
            // Filter by Date (30 days)
            const filtered_response = response.data.filter((policy) => (
                new Date(policy.expiration_date) - new Date().setDate(new Date().getDate() + 30) <= 0
            ))
            //console.log(filtered_response)
            setPolicies(filtered_response)
            return true
        }, (error) => {
            alert("Network Request Error")
            console.log(error);
            return false
        })

    }, [])


    const [clients, setClients] = useState([])
    useEffect(() => {
        axios({
            method: 'get', 
            url: ClientURL, 
            headers: headers
        }).then((response) => {
            //console.log(response)
            const filtered_response = response.data.filter((client) => (
                policies.map((policy , index) => (
                    policy.client === client.id
                ))        
            ))
            setClients(filtered_response)
            return true
        }, (error) => {
            alert("Network Request Error")
            console.log(error);
            return false
        })
    }, [policies])
            
    const [finalContent, setFinalContent] = useState([])
    useEffect(() => {
        console.log(clients)
        console.log(policies)
    }, [clients])
                
    const ListContent = policies.map((c, i) => {
        return(
        <li>
            <div style={{margin:'2em', fontSize:'1.5rem', textAlign:'left', paddingLeft:'2em'}}>
                <div style={{padding:'.5em'}}>Policy ID: {c.id}<br/></div>
                <div style={{padding:'.5em'}}>Client Name: {c.clientName}<br/></div>
                <div style={{padding:'.5em'}}>Business Name: {c.businessName}<br/></div>
                <div style={{padding:'.5em'}}>Expiration Date: {c.expiration_date}<br/></div>
                <MaterialButton
                    style={{width:'50%', marginTop:'3em', marginBottom:'3em'}}
                    onClick={() => axios({
                        method: 'put', 
                        url: PolicyURL, 
                        headers: headers, 
                        data:{
                            id: c.id
                        }
                    })
                    .then((response) => {
                        alert("Renewed Policy!")
                        console.log(response)
                        return true
                    }, (error) => {
                        alert("Network Request Error")
                        console.log(error);
                        return false
                    })}>
                    Renew
                </MaterialButton>
            </div>
        </li>
        )
    })

    // console.log("here")
    //console.log(policies[0])

    return (
        <ul>
            {ListContent}
        </ul>
    )
}
