import React from 'react'
import AgentHeader from './components/AgentComponents/AgentHeader'
import './AgentRouter.scss'
import GridChooser from './components/AgentComponents/GridChooser'
import {Route} from 'react-router-dom'
import * as RouteConstants from './utils/RouteConstants'
import * as TopAgent from './components/AgentComponents/TopAgent'
import AgentFooter from './components/AgentComponents/AgentFooter'

//NOTE-- This file is heavily tied with RouteConstants.js
//------------------------------------------------------------------------------
//You will see ALOT of key={} in this file because 
//the virtual DOM to React component Reconciliation
//for more refer to these
//https://reactjs.org/docs/reconciliation.html
//https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js/43892905#43892905



//Advanced Routing where props are being passed
//into the GridChooser file
function RouteGridComponents(c){
    return(
        <Route
            key={"top-grid-route"+c.title+c.path} 
            exact path={c.path} 
            render={props => (
                <>
                    {c.topComponent}
                    <GridChooser 
                        {...props} 
                        title={c.title}
                        info={c.info}
                        storeData={c.storeData}/>
                </>
            )}
        />
    )
}


export default function AgentRouter(props){

    return(
        <>
            {/* <AgentHeader authButton={props.authButton}/> */}
            <AgentHeader/>

            <div className="home-div">

                {/* some routes for the header */}
                {/* does not hold home because that is a grid display */}
                {RouteConstants.agentHeaderInfo.map((headerInfo, i) => (
                    <Route
                        key={"agentHeaderInfo"+i}
                        exact path={headerInfo.path}
                        component={() => (
                        <>
                            {TopAgent.simple(headerInfo.title)}
                            <headerInfo.botComponent/> 
                        </> 
                    )}/>
                ))}


                {/* Little more complex... Uses the above method
                "RouteGridComponents" to provide all main clicking
                navigation for the user */}
                {RouteConstants.gridRouteInfo.map((route, index) => (
                    <RouteGridComponents key={"grid-route"+index} {...route} />
                ))}


                {RouteConstants.newBizInfo.map((route, i) => (
                    <Route
                        key={"newBizInfo"+i}
                        exact path={route.path}
                        component={() => (
                            <>
                                {TopAgent.simpleWithLocation(
                                    route.explanation, 
                                    route.title,
                                    route.icon)}
                                <route.botComponent/>
                            </> 
                        )}
                    />
                ))}


                {/* //go through all the existingClientInfo and store 
                //the needed components it needs to show */}
                {RouteConstants.existingClientInfo.map((route, i) => (
                    <Route
                        key={"existingClientInfo"+i}
                        exact path={route.path}
                        render={() => (
                            <> 
                                {TopAgent.simple(
                                    window.localStorage.getItem('Client Name') + "Hello?"
                                )}
                                {TopAgent.simpleWithLocation(
                                    route.explanation, 
                                    route.title,
                                    route.icon)}
                                <route.botComponent 
                                    key={"ExistingClient"+route.title+i} />
                            </>
                        )}
                    />
                ))}

            </div>
            <AgentFooter/>
        </>
    )
}