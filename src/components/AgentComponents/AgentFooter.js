import React from 'react'
import './AgentFooter.scss'

export default function AgentFooter(){
    return(
        <footer>
            <div className="left-side">
                <div className="container"> About Us </div>
                <div className="container"> Legal Details </div>
                <div className="container"> Terms & Conditions </div>
                <div className="container"> Data & Privacy Policy </div>
            </div>
            <div className="right-side">
                @2019Duplicagent
            </div>
        </footer>
    )
}