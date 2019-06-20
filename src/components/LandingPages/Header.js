import React from 'react'
import './Header.scss'
import Logo from '../Logo'
import SharpButton from './SharpButton';

export default function Header(){

    const staticText = [{word:'Contact Us'},{word:'Partners & Affiliate Companies'}];
    const staticBar = staticText.map((c) => {
        return(
            <div className="static-bar">
                {c.word}
            </div>
        )
    });

    return(
        <nav className="nav-static">
            <Logo/>
            {staticBar}
            <SharpButton word='Sign in'/>
        </nav>
    )
}
