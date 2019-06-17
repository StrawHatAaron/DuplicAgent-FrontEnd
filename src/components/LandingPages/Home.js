import React from 'react'
import './Home.scss'
import Header from './Header'
import Signin from "./Signin";
import GuysWalking from '../../img/guys-walking.png'

const customerTypeInfo = [
    {custType:'AGENCY', do:'Looking for an outscourcing system'},
    {custType:'FREELANCER', do:'Looking for a partner relationship'},
    {custType:'BUSINESS', do:'Looking for development help'}]

const customerTypeContent = customerTypeInfo.map((c) => {
    return(
        <div className='small-grid-part-2'>
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
    )
})

export default function Home(){
    return(
        <div className="the-big-div">
            <Header/>
            <body className="landing-body">
                <div className="landing-part-1">
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
                        <button className="learn">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="landing-row1-col2">
                    <img  src={GuysWalking} alt='decoration'/>
                </div>
                <Signin/>


                {customerTypeContent}
                
                
            </body>
        </div>


    )
}