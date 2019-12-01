import React, {useState, useEffect} from 'react'
import {PolicyURL, ClientURL} from '../../utils/ApiConstants'
import {AuthTokenKey} from '../../utils/auth'
import axios from 'axios'
import {MaterialButton} from '../../utils/Constants'
import { variableDeclaration } from '@babel/types';

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
            setPolicies(filtered_response)
            return true
        }, (error) => {
            alert("Network Request Error")
            console.log(error);
            return false
        })

    }, [])


    const [finalContent, setFinalContent] = useState([{
        policyId:0,
        clientName:'',
        businessName:'',
        expirationDate:''
    }])
    useEffect(() => {
        axios({
            method: 'get', 
            url: ClientURL, 
            headers: headers
        }).then((response) => {
            // console.log('client info')
            // console.log(policies)
            // console.log(response)
            // var clientIDs = policies.map((c) =>  c.client)
            var clientIDs = policies.map((c) =>  c.client)
            // console.log("policyId")
            // clientIDs = [...new Set(clientIDs)]
            // console.log(clientIDs)
            const filtered_clients = response.data.filter((client) => (
                clientIDs.includes(client.id )
            ))
            // console.log('filtered clients')
            // console.log(filtered_clients)
            // console.log('filtered policies')
            // console.log(policies)
            
            // console.log('policy objects')
            // console.log(policies[0].id)

            // var i;
            // for(i=0; i<policies.length; i++){
            //     setFinalContent(...finalContent, [{
            //         policyId:policies[i].id,
            //         expirationDate:policies[i].expiration_date,
            //         //where 
            //         clientName:"Aaron Miller",
            //         businessName:"CSU Sac",
            //     }])
            // }
            
            return true
        }, (error) => {
            alert("Network Request Error")
            console.log(error);
            return false
        })
    }, [policies])
            
    
                
    const ListContent = policies.map((c, i) => {
        return(
        <li>
            <div style={{margin:'2em', fontSize:'1.5rem', textAlign:'left', paddingLeft:'2em'}}>
                <div style={{padding:'.5em'}}>Policy ID: {c.id}<br/></div>
                {/* <div style={{padding:'.5em'}}>Client Name: {c.clientName}<br/></div>
                <div style={{padding:'.5em'}}>Business Name: {c.businessName}<br/></div> */}
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
