import React from 'react'
import Logo from '../img/logo-sizes/60.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.scss'

export default function Header(){
    return (
        <nav className="nav">
            <div className="nav-top">

                <div className="logo-area">
                    <img src={Logo} alt="Logo"/>
                    <div className="logo-text">
                        <div>DUPLICAGENT</div>
                        <div className="down-logo">Management Solutions</div>
                    </div>
                </div>

                <div className="search-area">
                    <input type="text" placeholder=" search for clients, key words, general inquiry..." className="search-input"/>
                    <button className="search-advanced">ADVANCED</button>
                    <button className="search-button">
                        <FontAwesomeIcon icon="search" pull="left"/>
                    </button>
                </div>

                <div className="profile-area">
                    <FontAwesomeIcon icon="user-tie"/>
                    <div>A. Miller</div>
                </div>

            </div>
        </nav>
    )
}