import React from 'react'
import './Home.scss'
import Header from './Header'
import Signin from "./Signin";
import GuysWalking from '../../img/guys-walking.png'
import SharpButton from './SharpButton'

const customerTypeInfo = [
    {custType:'AGENCY', do:'Looking for an outscourcing system'},
    {custType:'FREELANCER', do:'Looking for a partner relationship'},
    {custType:'BUSINESS', do:'Looking for development help'}]

const customerTypeContent = customerTypeInfo.map((c, index) => {
    
    var Vert= 'na';
    
    if (index < 2){
        console.log('be nice')
        Vert = 'ya'
        // VertHr = <hr width='1' size='100'/>
    }

    return(
        <div className='row-2-boxes'>
            <div className={Vert}>
                
                    <div className='bigger-text'>
                    I'M A <div className='cust-type'>{c.custType}</div>
                    </div>
                    <br/>
                    {c.do}
                    <br/>
                    <a className='link-learn' href='#'>
                        Learn More
                    </a>
            </div>
            {/* {VertHr} */}
        </div>
    )
})

const imgStyle = {
    width: '50%'
}

export default function Home(){
    return(
        <div className="the-big-div">
            <Header/>
            <body className="landing-body">
                <div className='row1'>
                    <div className="landing-row1-col1">
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
                            <SharpButton word="Learn More"/>
                        </div>
                    </div>
    
                    <div className="landing-row1-col2">
                        <img style={imgStyle} 
                        src={GuysWalking} 
                        alt='people walking' 
                        className='guys-walking'/>
                    </div>
                    <Signin/>
                </div>


                <div className='row-2'>
                    {customerTypeContent}
                </div>


                <div className="falcon9-box">
                    <div className="elon-quote">
                        Make America Great Again
                        <br/>-Donald Trump
                    </div>
                </div>
                
                <div className="row-4"> 
                    <div className='row-4-row-1'>Awesome Customer Support </div>
                    <div className='row-4-row-2'>Automated management systems can be comfusing. We have great people ready to help whenever you need it.</div>
                    <div className='row-4-row-3'>
                        <SharpButton word="Find out more"/>    
                    </div>
                </div>

                <div className="row-5">
                <h1>Contact Us </h1>
                    
                </div>


            </body>
        </div>


    )
}