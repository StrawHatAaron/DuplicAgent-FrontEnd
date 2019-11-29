import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {AuthTokenKey} from '../../utils/auth'
import {CheckUserInfoURL} from '../../utils/ApiConstants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AgentHeader.scss'
import Logo from '../Logo'
import * as RouteConstants from '../../utils/RouteConstants'
import * as Constants from '../../utils/Constants'
import {NavLink} from 'react-router-dom'
import auth from '../../utils/auth'
import {history} from '../../utils/history'

export default function Header(props){


    const [searchShow, setSearchShow] = useState(false)

    function toggleSearch(){
        setSearchShow(!searchShow)
    }

    const [email, setEmail] = useState('')
    useEffect(() => {
        axios({
            method: 'get', 
            url: CheckUserInfoURL, 
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
                setEmail(response.data['name'])
                window.localStorage.setItem('email', response.data['name'])
                console.log(response)
                return true
            }, (error) => {
                console.log(error);
                return false
        })
    }, [])

    const toggleSearchStyle = {
        margin:'1em 3em'
    }

    const AdvancedSearchComponent = () => {
        if (searchShow===true){
            return(
                <div style={{background:'#fff', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <input type="text" placeholder=" Search for clients, key words, general inquiry..." style={toggleSearchStyle}/><br/>
                    <input type="text" placeholder=" Search for clients, key words, general inquiry..." style={toggleSearchStyle}/><br/>
                    <input type="text" placeholder=" Search for clients, key words, general inquiry..." style={toggleSearchStyle}/><br/>
                </div>
            )
        } else {
            return(
                <></>
            )
        }
        
    }

    const faContent = RouteConstants.agentHeaderInfo.map((info, i) => {
       return(
           <NavLink
                key={"bot-navbar-right-routes"+i} 
                to={info.path}
                activeStyle={{color: Constants.orange}}>
                <FontAwesomeIcon className="four-fa-fas" icon={info.icon}/>
            </NavLink>
       )
    });

    return (
        <nav className="nav-agent">
            <div className="nav-top">
                <Logo/>
                <div className="search-area">
                    <input type="text" placeholder=" Search for clients, key words, general inquiry..." className="search-input"/>
                    <div className="search-buttons">
                        <button 
                            onClick={() => toggleSearch()}
                            className="search-advanced">
                        ADVANCED
                        </button>
                        <button className="search-button">
                            <FontAwesomeIcon icon="search" pull="left"/>
                        </button>
                    </div>
                </div>
                <div className="profile-area">
                    <FontAwesomeIcon icon="user-tie"/>
                    <div className="user-name">{email}</div>
                    <button 
                        onClick={() => {
                            auth.logout(() => {
                              history.push(RouteConstants.signInPath);
                            });
                          }}
                        >
                        Logout
                    </button>
                </div>
            </div>

            <AdvancedSearchComponent/>

            <div className="nav-bot">
                <div className="current-route">
                    Current Route
                </div>
                <div className="four-fa-fas">
                    <NavLink
                        key={"bot-navbar-right-routes"+4} 
                        to={RouteConstants.gridRouteInfo[0].path}
                        activeStyle={{color: Constants.orange}}>
                        <FontAwesomeIcon 
                            className="four-fa-fas" 
                            icon="home"
                            size="1x"
                            />
                    </NavLink>
                    {faContent}
                </div>
            </div>
            
        </nav>
    )
}