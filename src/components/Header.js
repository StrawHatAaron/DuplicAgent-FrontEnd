import React from 'react'
import './Header.scss'
import Logo from './Logo'

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
        <div className="document-look">
            <nav className="nav-static">
                <Logo/>
                {staticBar}
                <button className="sign-in">
                    Sign in
                </button>
            </nav>

            <body className="">

            </body>
        </div>
    )
}