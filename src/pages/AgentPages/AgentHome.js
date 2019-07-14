import React from 'react'
import AgentHeader from '../../components/AgentComponents/AgentHeader'
import './AgentHome.scss'
import GridChooser from '../../components/AgentComponents/GridChooser';
import {Route} from 'react-router-dom'
import * as RouteConstants from '../../utils/RouteConstants'
import ExistingClient from '../../components/AgentComponents/ExistingClient'
import NewClient from '../../components/AgentComponents/NewClient'
import * as TopAgent from '../../components/AgentComponents/TopAgent'
import AgentFooter from '../../components/AgentComponents/AgentFooter';

const componentRoutes = [{
        //New Client
        path: RouteConstants.newBizInfo[0]['path'],
        component: NewClient,
        topComponent: TopAgent.simpleWithLocation(
            "Enter new client information:", 
            "New Client",
            RouteConstants.newBizInfo[0]['icon'])
    },{
        //Existing Client
        path: RouteConstants.newBizInfo[1]['path'],
        component: ExistingClient,
        topComponent: TopAgent.simpleWithLocation(
            "Select from existing clients:", 
            "Existing Client",
            RouteConstants.newBizInfo[1]['icon'])
    },{
        //Current Submissions
        path: RouteConstants.newBizInfo[2]['path'],
        component: ExistingClient,
        topComponent: TopAgent.simpleWithLocation(
            "", 
            "Current Submissions",
            RouteConstants.newBizInfo[2]['icon'])
    }]

const propRoutes =[{
        //home 
        path: "/",
        info: RouteConstants.homeInfo,
        topComponent: TopAgent.simple("Welcome, Jack!")
    },{
        //New Business
        path: RouteConstants.homeInfo[0]['path'],
        info: RouteConstants.newBizInfo,
        topComponent: TopAgent.simpleWithLocation(
            "What are you looking to do?", 
            "New Business",
            RouteConstants.homeInfo[0]['icon'])
    },{
        //Client Page - Chose Existing Client
        path: RouteConstants.choseClientInfo[0]['path'],
        info: RouteConstants.existingClientInfo,
        topComponent: TopAgent.client()
    }];

function RoutePropComponent(route){
    return(
        <Route 
            exact path={route.path} 
            render={props => (
                <div>
                    {route.topComponent}
                    <GridChooser {...props} info={route.info} />
                </div>
        )}/>
    )
}

export default function AgentHome(){

console.log(RouteConstants.newBizInfo[1]['path']+"CustomerId")

    return(
        <body>
            <AgentHeader/>
            <div className="home-div">
                {propRoutes.map((route, i) => (
                    <RoutePropComponent key={i} {...route} />
                ))}
                {componentRoutes.map((route, i) => (
                    <Route
                    exact path={route.path}
                    component={() => (
                       <div>
                            {route.topComponent}
                            <route.component/>
                       </div> 
                    )}/>
                ))}

                {/* <Route
                    exact path={componentRoutes[0].path}
                    component={componentRoutes[0].component} />  */}
            </div>
            <AgentFooter/>
        </body>
    )
}