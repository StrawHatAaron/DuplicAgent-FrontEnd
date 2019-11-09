import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {ClientURL} from '../../utils/ApiConstants'
import {AuthTokenKey} from '../../utils/auth'

export default function TopClient() {


    const url = window.location.hash.replace('#', '')
    const urlArr = url.split('/')

    var id

    if(urlArr[urlArr.length-1]===''){
        id = urlArr[urlArr.length-2]
    } else {
        id = urlArr[urlArr.length-1]
    }

    window.localStorage.setItem('clientId', id)

    // console.log('id: ' + id)
    // console.log("arr-2: "+urlArr[urlArr.length-2])
    // console.log("arr-1: "+urlArr[urlArr.length-1])

    var id = window.localStorage.getItem('clientId')
    console.log(id)

    const [fein, setFein] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emails, setEmails] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    useEffect(() => {
        axios({
            method: 'get', 
            url: ClientURL + "?id="+id, 
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization': AuthTokenKey,
                'Accept': 'application/json, text/plain, */*',
                'Cache-Control': 'no-cache',
            }}).then((response) => {
                console.log(response)
                setFein(response.data[0]['fein'])
                setBusinessName(response.data[0]['business_name'])
                setFirstName(response.data[0]['first_name'])
                setLastName(response.data[0]['last_name'])
                setEmails(response.data[0]['emails'])
                setPhone(response.data[0]['phone'])
                setAddress(response.data[0]['address'])
                setCity(response.data[0]['city'])
                setState(response.data[0]['state'])
                setZipCode(response.data[0]['zip_code'])
            }, (error) => {     
        })
    }, [])

    return(
        <div className="top-client">
            <div className="left-side">
                <div className="cust-name">{businessName}</div>
                {firstName} {lastName}<br/>
                {phone}<br/>
                {address}, {city}, {state} {zipCode} <br/>
                {emails} <br/>
            </div>
            <div className="right-side">
                FEIN: {fein} <br/>
                Client ID: {id}<br/>
                Status: Active
            </div>
        </div>
    )
}