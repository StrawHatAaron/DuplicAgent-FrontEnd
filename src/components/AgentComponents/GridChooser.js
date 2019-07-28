import React from 'react'
import './GridChooser.scss'
import {Link, Switch, Route} from 'react-router-dom'
import ExistingFile from './ExistingFile';

export default function GridChooser(props){

    if(props.storeData==='Client Name'){
        console.log("storeData:"+props.storeData)
        console.log("title:"+props.title)
        window.localStorage.setItem(
            props.storeData, 
            "Aaron Miller")
            console.log("Storing Client Data")    
    }   
    
    const homeContent = props.info.map((info, i) => {
        // console.log("pathname: " + window.location.hash)
        var url = window.location.hash.replace('#', '')
        // console.log(url)
        return(
            <Link
                key={info.path+i} 
                to={url + info.title.replace(/\s/g, '') + '/'} 
                className="section">

                <img
                    src={info.icon}
                    alt={info.title}/>
                <div className="title">
                    {info.title}
                </div>
                <div className="explanation">
                    {info.explanation}
                </div>
            </Link>
        )
    })


    return(
        <div className="grid-choose">
            {homeContent}
            <Switch>
                {props.info.map((info, i) => (
                <Route 
                    key={info.title+i}
                    path={`/NewBusiness/ExistingClient/:clientId/${info.title.replace(/\s/g, '')}`}
                    component={ExistingFile}/>
                ))}
            </Switch>
        </div>
    )
}

