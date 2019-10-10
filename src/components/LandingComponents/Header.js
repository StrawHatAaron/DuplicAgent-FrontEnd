import React from 'react'
import './Header.scss'
import Logo from '../Logo'
import Dropdown from 'react-bootstrap/Dropdown'
import SharpButton from '../SharpButton';



export default function Header(){

    const staticText = [{word:'Contact Us'},{word:'Partners & Affiliate Companies'}];
    const staticBar = staticText.map((c, index) => {
        return(
            <div 
                className="static-bar"
                key={"header-nav-"+index}>
                {c.word}
            </div>
        )
    }
    );


    const navNamesDropDown =  [ 
        {name: "Something1"},
        {name: "Something2"},
        {name: "Something3"},
    ]
    const NavContentDropDown = navNamesDropDown.map((c) => {
        return (
            <>
                <Dropdown.Item href="#/action-1">{c.name}</Dropdown.Item>
                <br/>
            </>
        )
    })

            
                
    


    return(
        <nav className="nav-static">
           <Logo/>
         {staticBar}
        


        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <SharpButton word="menu"/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {NavContentDropDown}
            </Dropdown.Menu>
        </Dropdown>

          
        </nav>
    )


}
