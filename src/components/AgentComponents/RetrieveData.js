import React, {useState, useEffect} from 'react'
import './RetrieveData.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {ClientURL, PolicyURL, AccountingInfoURL} from '../../utils/ApiConstants'
import {ExistingClients, Polices, AccountingInfo} from '../../utils/RouteConstants'
import {AuthTokenKey} from '../../utils/auth'

//should probably name this data list
export default function RetrieveData(props) {

    const url = window.location.hash.replace('#', '')

    const [contentType, setContentType ] = useState({
        title:null,
        apiUrl:null,
        descriptions:[],
        parsers:[]
    })
    useEffect(() => {
        switch(props.type){
            case ExistingClients:
            setContentType({
                title:ExistingClients,
                apiUrl:ClientURL,
                descriptions:[
                    {description:'First Name'},
                    {description:'Last Name'},
                    {description:'Phone'},
                    {description:'Email'},
                ],
                parsers:['first_name','last_name','phone','emails',]
            })
            break
            case Polices:
            setContentType({
                title:Polices,
                apiUrl:PolicyURL,
                descriptions:[
                    {description:'Number'},
                    {description:'Line Of Business'},
                    {description:'Producer'},
                    {description:'Expiration Date'},
                ],
                parsers:['number', 'line_of_business', 
                    'producer', 'expiration_date',],
            })
            console.log('on policy page')
            break
            case AccountingInfo:
            setContentType({
                title:AccountingInfo,
                apiUrl:AccountingInfoURL,
                descriptions:[
                    {description:'Premium Amount'},
                    {description:'Deposit Amount'},
                    {description:'Agency Management Fee'},
                    {description:'Policy Fee'},
                ],
                parsers:['premium_amount', 'deposit_amount', 
                    'agency_management_fee', 'policy_fee',]
            })
            console.log('on accounting page')
            break
            default:
            console.log('oh god we are lost')
        }        
    }, [props.type])

    const [dataList, setDataList] = useState([])
    useEffect(() => {
        axios({
            method: 'get', 
            url: contentType.apiUrl, 
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
                setDataList(response.data)
                console.log(response)
                return true
            }, (error) => {
                console.log(error);
                return false
        })
    }, [contentType])

    var idList = []
    function onGotToPage(index){
        window.localStorage.setItem('clientId', idList[index])
    }

    const ListContent = dataList.map((data, index) => {
        idList.push(data['id'])
        return(
            <div key={'retrieve-data-list'+contentType.title+index} className="list">
                <Link 
                    to={url + data['id'] + '/'} 
                    className="text"
                    onClick={onGotToPage(index)}> 
                    {data[contentType.parsers[0]]} 
                </Link>
                <div className="text">{data[contentType.parsers[1]]}</div>
                <div className="text">{data[contentType.parsers[2]]}</div>
                <div className="text">{data[contentType.parsers[3]]}</div>
            </div>
        )
    })

    const HeaderListContent = contentType.descriptions.map((c, index) => {
        return(
            <div key={'retrieve-header-list'+contentType.title+index} className="text">
                {c.description}
            </div>
        )
    })


    return (
        <div className="retrieve-data">
            <div className="headline">
                {contentType.title}
            </div>
            <div className="box-for-list">
                <div className="list header-list">
                {HeaderListContent}
                </div>
                {ListContent}    
            </div>    
        </div>
    )
}
