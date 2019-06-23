import React from 'react'
import './Footer.scss'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='col-1'>
                12345 Jack Brooks Street <br/>
                Rocklin, CA 95677 <br/>
                (916) 660-6991 <br/>
                hello@duplicagent.com <br/>
            </div>
            <div className='col-2'>
                ACORD image
            </div>
            <div className='col-3'>
                @2019 Duplicagent, LLC - Copyright - All Rights Reserved
            </div>
            <div className='col-4'>
                (Social Media Icons)
            </div>
            <div className='col-5'>
                Privacy Statement <br/>
                Terms of Use <br/>
                Terms of Service
            </div>
        </footer>
    )
}