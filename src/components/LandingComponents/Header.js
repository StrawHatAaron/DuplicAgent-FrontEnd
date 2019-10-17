import React from 'react'
import './Header.scss'
import Logo from '../Logo'
import SharpButton from '../SharpButton';

export default function Header(props){

    const staticText = [{word:'Contact Us'},{word:'Partners & Affiliate Companies'}];
    const staticBar = staticText.map((c, index) => {
        return(
            <div 
                className="static-bar"
                key={"header-nav-"+index}>
                {c.word}
            </div>
        )
    });

    return(
        <nav className="nav-static">
            <Logo/>
            {staticBar}
            <SharpButton 
                word={props.word} 
                link={props.link}/>
        </nav>
    )
}
