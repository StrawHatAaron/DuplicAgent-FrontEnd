import React from 'react'
import './Home.scss'
import Header from './components/LandingComponents/Header'
import Footer from './components/LandingComponents/Footer'
import Signin from "./components/LandingComponents/Signin"
import ContactUs from "./components/ContactUs"
import SharpButton from './components/SharpButton'
import GuysWalking from './media/guys-walking.png'
import BaretapsLogo from './media/baretaps_logo.png'
import SacStateLogo from './media/sac_state_logo.png'
import EmpireWeLogo from './media/empire_west_logo.jpeg'


const customerTypeInfo = [
    {grammar:"I'M AN ", custType:'AGENCY', do:'Looking for an outscourcing system'},
    {grammar:"I'M A ", custType:'FREELANCER', do:'Looking for a partner relationship'},
    {grammar:"I'M A ", custType:'BUSINESS', do:'Looking for development help'}]
const customerTypeContent = customerTypeInfo.map((c, index) => {
    var Vert= 'na';
    if (index < 2){
        console.log('be nice')
        Vert = 'ya'
    }
    return(
        <div
            key={"customer-type-content"+index} 
            className={`row-2-boxes ${Vert}`}>
            <div className='bigger-text'>
                {c.grammar} <div className='cust-type'>{c.custType}</div>
            </div>
            <br/>
            {c.do}
            <br/>
            <a className='link-learn' href='hi'>
                Learn More
            </a>
        </div>
    )
});


const affiliatesInfo = [
    {name:'Baretaps Tech.', class:'bare'},
    {name:'CSU Sacramento', class:'sac'},
    {name:'Empire West Insurance', class:'empire'}]
const affiliatesContent = affiliatesInfo.map((c, index) => {
    var imgSrc
    switch(c.name){
        case 'Baretaps Tech.':
        imgSrc = BaretapsLogo
        break;
        case 'CSU Sacramento':
        imgSrc = SacStateLogo
        break;
        case 'Empire West Insurance':
        imgSrc = EmpireWeLogo
        break;
        default:
        console.log('need a default')
    }
    return (
        <div 
            key={"affiliates-content"+index} 
            className={`${c.class} affiliates`}>
            {c.name}
            <hr/>
            <img src={imgSrc} 
                alt={c.name} 
                className=''/>
        </div>
    )
});

const imgStyle = {
    width: '50%'
}



export default function Home(props){
    return(
        <div
            key={"the-big-div-lands"} 
            className="the-big-div">
            <Header/>
            <div className="landing-body">

                <div className='row-1'>
                    <div className="row-1_col1">
                        <div className="drive-force">
                            a Driving Force
                        </div>
                        <div className="your-biz">
                            IN YOUR BUSINESS
                        </div>
                        <div className='sm-col-flex'>
                            <div className='suc-man'>
                                DUPLICATE SUCCESSFUL MANAGEMENT
                            </div>
                            <div className="explain">
                                Improve efficiency and productivity through a customizable platform tailored to your business. Utilize a software system to focus spceifically on the tasks that will help your business reach its full potiential.
                            </div>
                            <div className="button-wrapper" style={{justifyContent: 'center', textAlign:'center'}}>
                                <SharpButton word="Learn More" />
                            </div>
                            
                        </div>
                    </div>
    
                    <div className="row-1_col2">
                        {/* <img style={imgStyle} 
                            src={GuysWalking} 
                            alt='people walking' 
                            className='guys-walking'/> */}
                    </div>

                    <div className="row-1_col3">
                        <Signin auth={props.auth}/>
                    </div>
                </div>




                <div className='row-2'>
                    {customerTypeContent}
                </div>


                <div className="row-3">
                    <div className="elon-quote">
                        Make America Great Again
                        <br/>-Trumpel Frumpel
                    </div>
                </div>
                
                <div className="row-4"> 
                    <div className='row-4-row-1'>
                        Awesome Customer Support 
                    </div>
                    <div className='row-4-row-2'>
                        Automated management systems can be comfusing. We have
                        great people ready to help whenever you need it.
                    </div>
                    <div className='row-4-row-3'>
                        <SharpButton word="Find out more"/>    
                    </div>
                </div>

                <div className="row-5">
                    <div className='row-5-contain'>
                        <hr className="left"/>
                        <div className='contact-us'>Contact Us</div>
                        <hr className="right"/>
                    </div>
                </div>

                <div className="row-6">
                    <ContactUs/>
                    <div>Another picture will be here</div>
                </div>
                
                <div className="row-7">
                    <hr className="hr-1"/>
                    <div className='affiliates-comps'>Supporters & Affiliate Companies</div>
                    <hr className="hr-2"/>
                </div>

                
                <div className="row-8">
                    {affiliatesContent}
                </div>

                <div className="row-9">
                    <hr/>
                </div>
                
                <Footer key={"agent-footer"+1}/>

            </div>
        </div>


    )
}