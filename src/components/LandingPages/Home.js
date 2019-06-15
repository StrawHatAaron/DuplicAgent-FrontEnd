import React from 'react'
import './Home.scss'
import Header from './Header'
import Signin from "./Signin";


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
                    <div>
                        DUPLICATE SUCCESSFUL MANAGEMENT
                    </div>
                    <div className="explain">
                        Improve efficiency and productivity through a customizable platform tailored to your business. Utilize a software system to focus spceifically on the tasks that will help your business reach its full potiential.
                    </div>
                    <button className="learn">
                        Learn More
                    </button>
                </div>

                <div className="landing-part-2">
                    and image should be here
                </div>
                <Signin/>

            </body>
        </div>


    )
}