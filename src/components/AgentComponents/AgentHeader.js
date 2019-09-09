import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AgentHeader.scss'
import Logo from '../Logo'
import * as RouteConstants from '../../utils/RouteConstants'
import * as Constants from '../../utils/Constants'
import {NavLink} from 'react-router-dom'
import auth from '../../auth'
import {history} from '../../history'

export default function Header(props){

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
                        <button className="search-advanced">
                        ADVANCED
                        </button>
                        <button className="search-button">
                            <FontAwesomeIcon icon="search" pull="left"/>
                        </button>
                    </div>
                </div>
                <div className="profile-area">
                    <FontAwesomeIcon icon="user-tie"/>
                    <div className="user-name">Aaron</div>
                    <button 
                        onClick={() => {
                            auth.logout(() => {
                              history.push("/SignIn");
                            });
                          }}
                        >
                        Logout
                    </button>
                </div>
            </div>
            <div className="nav-bot">
                <div className="current-route">
                    Current Route
                </div>
                <div className="four-fa-fas">
                    {faContent}
                </div>
            </div>
            
        </nav>
    )
}