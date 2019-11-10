import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {PolicyURL} from '../../utils/ApiConstants'
import {AuthTokenKey} from '../../utils/auth'

function DisplayPolicy() {

    var id = ''

    const [number, setNumber] = useState('')
    const [lineOfBusiness, setLineOfBusiness] = useState('')
    const [effectiveDate, setEffectiveDate] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [billingMethod, setBillingMethod] = useState('')
    const [writingCompany, setWritingCompany] = useState('')
    const [mgaBroker, setMgaBroker] = useState('')
    const [referralSource, setReferralSource] = useState('')
    const [producer, setProducer] = useState('')
    const [assignedCsr, setAssignedCsr] = useState('')
    useEffect(() => {
        axios({
            method: 'get', 
            url: PolicyURL + "?id="+id, 
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization': AuthTokenKey,
                'Accept': 'application/json, text/plain, */*',
                'Cache-Control': 'no-cache',
            }}).then((response) => {
                console.log(response)
                setNumber(response.data[0]['number'])
                setLineOfBusiness(response.data[0]['line_of_business'])
                setEffectiveDate(response.data[0]['effective_date'])
                setExpirationDate(response.data[0]['expiration_date'])
                setBillingMethod(response.data[0]['billing_method'])
                setWritingCompany(response.data[0]['writing_company'])
                setMgaBroker(response.data[0]['mga_broker'])
                setReferralSource(response.data[0]['referral_source'])
                setProducer(response.data[0]['producer'])
                setAssignedCsr(response.data[0]['assigned_csr'])
            }, (error) => {     
        })
    }, [])

    return (
        <div style={{margin:'2em', fontSize:'1.5rem', textAlign:'left', paddingLeft:'2em'}}>
            <div style={{padding:'.5em'}}>Number:{number}<br/></div>
            <div style={{padding:'.5em'}}>Line of Business:{lineOfBusiness}<br/></div>
            <div style={{padding:'.5em'}}>Effective Date:{effectiveDate}<br/></div>
            <div style={{padding:'.5em'}}>Expiration Date:{expirationDate}<br/></div>
            <div style={{padding:'.5em'}}>Billing Method:{billingMethod}<br/></div>
            <div style={{padding:'.5em'}}>Writing Company:{writingCompany}<br/></div>
            <div style={{padding:'.5em'}}>MGA Broker:{mgaBroker}<br/></div>
            <div style={{padding:'.5em'}}>Referral Source:{referralSource}<br/></div>
            <div style={{padding:'.5em'}}>Producer:{producer}<br/></div>
            <div style={{padding:'.5em'}}>Assigned CSR:{assignedCsr}<br/></div>
        </div>
    )
}

export default DisplayPolicy
