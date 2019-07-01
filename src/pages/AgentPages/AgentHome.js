import React from 'react'
import AgentHeader from '../../components/AgentComponents/AgentHeader'
import './AgentHome.scss'
import GridChooser from '../../components/AgentComponents/GridChooser';
import {Switch, Route} from 'react-router-dom'
import * as RouteConstants from '../../utils/RouteConstants'
import ExistingClient from '../../components/AgentComponents/ExistingClient'


const propRoutes =[{
        path: "/",
        info: RouteConstants.homeInfo
    },{
        path: RouteConstants.homeInfo[0]['path'],
        info: RouteConstants.newBizInfo
    },{
        path: RouteConstants.newBizInfo[1]['path']+"/CustomerId",
        info: RouteConstants.existingClientInfo
    }];

const componentRoutes = [{
    path: RouteConstants.newBizInfo[1]['path'],
    component: ExistingClient
    }]

function RoutePropSubRoute(route){
    return(
        <Route 
            exact path={route.path} 
            render={props => (
            <GridChooser {...props} info={route.info} />
        )}/>
    )
}

export default function AgentHome(){

console.log(RouteConstants.newBizInfo[1]['path']+"CustomerId")

    return(
        <div>
            <AgentHeader/>
            <body>
                <div className="home-div">
                    <div className="welcome">
                        Welcome, Jack!
                    </div>
                    <hr/>
                    
                        {propRoutes.map((route, i) => (
                            <RoutePropSubRoute key={i} {...route} />
                        ))}
                        <Route
                            exact path={componentRoutes[0].path}
                            component={componentRoutes[0].component} /> 
                    
                </div>

            </body>
            
        </div>
    )
}