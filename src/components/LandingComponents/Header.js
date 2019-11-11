import React from 'react'
import './Header.scss'
import Logo from '../Logo'

import ContactUsButton from '../ContactUsButton';
import PartnersAndAffiliateCompaniesButton from '../PartnersAndAffiliateCompaniesButton';


export default function Header(){



    return(
        <nav className="nav-static">
           <Logo/>


            <ContactUsButton word=""/>
            <PartnersAndAffiliateCompaniesButton word=""/>
                 
        </nav>
    )


}
