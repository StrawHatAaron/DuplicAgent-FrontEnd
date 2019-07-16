import LogoImg from "../media/logo-sizes/60.png";
import React from "react";
import './Logo.scss'

export default function Logo() {
    return(
        <div className="logo-area">
            <img src={LogoImg} alt="Logo" className="logo"/>
            <div className="logo-text">
                <div>DUPLICAGENT</div>
                <div className="down-logo">Management Solutions</div>
            </div>
        </div>
    )
}