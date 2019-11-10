import React, {useState} from 'react'
import axios from 'axios'
import {CssTextField, MaterialButton} from '../../utils/Constants'
import {PolicyURL} from '../../utils/ApiConstants'
import {newBizInfo} from '../../utils/RouteConstants'
import {history} from '../../utils/history'
import {AuthTokenKey} from '../../utils/auth'
import './NewClient.scss'

export default function NewPolicy(){

    // const [id, setId] = useState('')
    const [client, setClient] = useState('')
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
    
    // console.log(AuthTokenKey)
    
    const TextWidth = {
        width: '100%'
    }

    return(
        <div className="new-client">
            <div className="t">
                Client Information
            </div>
            <br/>
            <div className="r">
                <div className="c">
                    <CssTextField
                        style={TextWidth}
                        variant="outlined"
                        margin="normal" 
                        id="number" 
                        label="Number" 
                        onChange={(e) => setNumber(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="line-of-biz"
                        label="Line of Business"
                        onChange={(e) => setLineOfBusiness(e.target.value)}/>
                    <br/>
                    <CssTextField
                        style={TextWidth}
                        variant="outlined"
                        margin="normal" 
                        id="effective-date" 
                        label="Effective Date" 
                        onChange={(e) => setEffectiveDate(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="expiration-date" 
                        label="Expiration Date" 
                        onChange={(e) => setExpirationDate(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="billing-method" 
                        label="Billing Method" 
                        onChange={(e) => setBillingMethod(e.target.value)}/>
                    <br/>
                </div>
                <div className="c">
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="writing-company" 
                        label="Writing Company" 
                        onChange={(e) => setWritingCompany(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="mga" 
                        label="MGA Broker" 
                        onChange={(e) => setMgaBroker(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="referral" 
                        label="Referral Source" 
                        onChange={(e) => setReferralSource(e.target.value)}/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="producer" 
                        label="Producer" 
                        onChange={(e) => setProducer(e.target.value)}/>
                    <br/>
                    <CssTextField 
                        style={TextWidth}
                        variant="outlined"
                        margin="normal"
                        id="csr" 
                        label="Assigned CSR" 
                        onChange={(e) => setAssignedCsr(e.target.value)}/>
                    <br/>
                </div>
            </div>
                <MaterialButton
                    style={{width:'75%', marginTop:'3em', marginBottom:'3em'}}
                    onClick={() => (axios({
                        method: 'post', 
                        url: PolicyURL, 
                        headers:{
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json;charset=utf-8',
                            'Access-Control-Allow-Credentials': 'true',
                            'Authorization': AuthTokenKey,
                            'Accept': 'application/json, text/plain, */*',
                            'Cache-Control': 'no-cache',
                        }, 
                        data:{
                            client:window.localStorage.getItem('clientId'),
                            number:78,
                            line_of_business:lineOfBusiness,
                            effective_date:effectiveDate,
                            expiration_date:expirationDate,
                            billing_method:billingMethod,
                            writing_company:writingCompany,
                            mga_broker:mgaBroker,
                            referral_source:referralSource,
                            producer:producer,
                            assigned_csr:assignedCsr,
                        }})
                        .then((response) => {
                            console.log(response)

                            //This code was written to always go back to the main client page
                            // I Decided to comment it out because idk what the best 
                            //user experience would be.
                            // const url = window.location.hash.replace('#', '')
                            // const splitUrl = url.split('/')
                            // splitUrl.map((c) => {console.log(c)})
                            // // console.log(splitUrl.length)
                            // var cutLength
                            // if(splitUrl[splitUrl.length-1]===''){
                            //     cutLength = splitUrl[splitUrl.length-2].length + 1
                            // } else {
                            //     cutLength = splitUrl[splitUrl.length-1].length
                            // }
                            // // url.length - 1
                            // const newRoute = url.substring(0, url.length-cutLength)
                            // console.log(newRoute)
                            //history.push(newRoute)

                            alert('policy ' + number + ' was properly created')
                            history.goBack()

                        }, (error) => {
                            console.log(error);
                            return false
                        })
                    )}>
                Next
            </MaterialButton>
        </div>
    )
}