import React, {useState, useEffect} from 'react'
import {PolicyURL, ClientURL} from '../../utils/ApiConstants'
import {AuthTokenKey} from '../../utils/auth'
import axios from 'axios'
import {MaterialButton} from '../../utils/Constants'

export default function Notifications() {
    const [policies, setPolicies] = useState([])

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': AuthTokenKey,
        'Accept': 'application/json, text/plain, */*',
        'Cache-Control': 'no-cache',
    }

    const List = ({ list }) => (
        <ul>
            {list.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    );

    const ListItem = ({ item }) => (
        <li>
            <div style={{margin:'2em', fontSize:'1.5rem', textAlign:'left', paddingLeft:'2em'}}>
                <div style={{padding:'.5em'}}>Policy ID: {item.id}<br/></div>
                <div style={{padding:'.5em'}}>Client Name: {item.client}<br/></div>
                <div style={{padding:'.5em'}}>Line of Business: {item.line_of_business}<br/></div>
                <div style={{padding:'.5em'}}>Expiration Date: {item.expiration_date}<br/></div>
                <MaterialButton
                    style={{width:'50%', marginTop:'3em', marginBottom:'3em'}}
                    onClick={() => axios({
                        method: 'put', 
                        url: PolicyURL, 
                        headers: headers, 
                        data:{
                            id: item.id
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
    );

    useEffect(() => {
        axios({
            method: 'get', 
            url: PolicyURL, 
            headers: headers
            }).then((response) => {
                const full_response = response.data.map((policy) => (
                    {
                        id: policy.id,
                        client: policy.client,
                        number: policy.number,
                        line_of_business: policy.line_of_business,
                        effective_date: policy.effective_date,
                        expiration_date: policy.expiration_date,
                        billing_method: policy.billing_method,
                        writing_company: policy.writing_company,
                        mga_broker: policy.mga_broker,
                        referral_source: policy.referral_source,
                        producer: policy.producer,
                        assigned_csr: policy.assigned_csr,
                        client_name: null,
                        business_name: null
                    }
                ))

                //console.log(full_response)

                full_response.forEach((policy) => (
                    axios({
                        method: 'get', 
                        url: ClientURL + "?id="+policy.client, 
                        headers: headers
                        }).then((response) => {
                            policy.client_name = response.data[0].first_name + " " + response.data[0].last_name
                            policy.business_name = response.data[0].business_name
                            return true
                        }, (error) => {
                            alert("Network Request Error")
                            console.log(error);
                            return false
                        })
                ))

                // Filter by Date (30 days)
                const filtered_response = full_response.filter((policy) => (
                     new Date(policy.expiration_date) - new Date().setDate(new Date().getDate() + 30) <= 0
                ))

                console.log(filtered_response)
                console.log(filtered_response[0].business_name) // HOW COME THIS DOESNT PRINT??
                
                setPolicies(filtered_response)
                return true
            }, (error) => {
                alert("Network Request Error")
                console.log(error);
                return false
        })

    }, [])
    
    return (
            <List list={policies}></List>
    )
}
