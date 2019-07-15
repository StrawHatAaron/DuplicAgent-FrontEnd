import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AgentHeader.scss'
import Logo from '../Logo'
import * as RouteConstants from '../../utils/RouteConstants'
import * as Constants from '../../Constants'
import {NavLink} from 'react-router-dom'

export default function Header(){

    const faContent = RouteConstants.Routes.map((info, i) => {
       return(
            <>{i < 3  &&
                <a className="wrap-anchor">
                    <NavLink 
                        to={info.path}
                        activeStyle={{color: Constants.orange}}>
                    <FontAwesomeIcon className="four-fa-fas" icon={info.icon}/>
                    </NavLink>
                </a>
            }</>
          )
    });

    return (
        <nav className="nav-agent">
            <div className="nav-top">
                <Logo/>
                <div className="search-area">
                    <input type="text" placeholder=" search for clients, key words, general inquiry..." className="search-input"/>
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
                </div>
            </div>
            <div className="nav-bot">
                <div className="current-route">
                    Current Route
                </div>
                <div className="four-fa-fas">
                    <a className="wrap-anchor">
                        <NavLink 
                        exact to="/"
                        activeStyle={{color: Constants.orange}}>
                            <FontAwesomeIcon className="four-fa-fas" icon="home"/>
                        </NavLink>
                    </a>
                    {faContent}
                </div>
            </div>
            
        </nav>
    )
}