import React from 'react'
import './Footer.scss'
import ACORDLogo from '../../media/acord-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconInfo =[{company:'facebook'}, 
                {company:'instagram'}, 
                {company:'linkedin'}]
const iconContent = iconInfo.map((c, index) => {
    return(
        <FontAwesomeIcon 
            key={"footer-icon"+index}
            className="icon"    
            icon={['fab', `${c.company}`]} 
            size='lg'>
        </FontAwesomeIcon>
    )
})

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='col-1 footer-row'>
                12345 Jack Brooks Street <br/>
                Rocklin, CA 95677 <br/>
                (916) 660-6991 <br/>
                hello@duplicagent.com <br/>
            </div>
            {/* <div className='col-2 footer-row'>
                <img
                    src={ACORDLogo}
                    alt="NOT CERTIFIED WITH Association for Cooperative Operations Research and Development."/>
            </div> */}
            <div className='col-3 footer-row'>
                @2019 Duplicagent, LLC - Copyright <br/>
                All Rights Reserved <hr/>
                Privacy Statement <br/>
                Terms of Use <br/>
                Terms of Service
            </div>
            <div className='col-4 footer-row'>
                
                <div className="icon-sect">
                Follow Us 
                {iconContent}    
                </div>
                <img
                    src={ACORDLogo}
                    alt="NOT CERTIFIED WITH Association for Cooperative Operations Research and Development."/>
            </div>
        </footer>
    )
}