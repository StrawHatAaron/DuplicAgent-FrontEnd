import React, {useState, useEffect} from 'react'
import './ExistingClient.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {ClientURL} from '../../utils/ApiConstants'
import {AuthTokenKey} from '../../utils/auth'

//should probably name this data list
export default function RetrieveData(props) {

    const contentType = {
        title:'',
        url:'',
        dataDisplayed:[]
    }

    switch(props.type){
        case 'client':
            console.log('on client page')
        break
        case 'policy':
            console.log('on policy page')
        break
        case 'accounting':
            console.log('on policy page')
        break
        default:
            console.log('oh god we are lost')
    }

    const url = window.location.hash.replace('#', '')

    const [clientList, setClientList] = useState([])
    useEffect(() => {
        axios({
            method: 'get', 
            url: ClientURL, 
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization': AuthTokenKey,
                'Accept': 'application/json, text/plain, */*',
                'Cache-Control': 'no-cache',
            },
            })
            .then((response) => {
                setClientList(response.data)
                console.log(response)
                return true
            }, (error) => {
                console.log(error);
                return false
        })
    }, [])

    const ClientListContent = clientList.map((client, index) => {
        console.log(client['address'])
        return(
            
            <div key={'client-list'+index} className="list">
                <Link to={url + client['id'] + '/'} className="text"> 
                    {client['first_name']} 
                </Link>
                <div className="text">{client['last_name']}</div>
                <div className="text">{client['phone']}</div>
                <div className="text">{client['emails']}</div>
            </div>
        )
    })

    return (
        <div className="existing-client">
            <div className="headline">
                Clients
            </div>
            <div className="box-for-list">
                <div className="list top-list">
                    <div className="text">First Name</div>
                    <div className="text">Last Name</div>
                    <div className="text">Phone</div>
                    <div className="text">Email</div>
                </div>
                {ClientListContent}    
            </div>    
        </div>
    )
}
