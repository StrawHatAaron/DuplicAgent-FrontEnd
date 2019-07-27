import React from 'react'
import AgentHeader from '../../components/AgentComponents/AgentHeader'
import './AgentHome.scss'
import GridChooser from '../../components/AgentComponents/GridChooser'
import {Route} from 'react-router-dom'
import * as RouteConstants from '../../utils/RouteConstants'
import * as TopAgent from '../../components/AgentComponents/TopAgent'
import AgentFooter from '../../components/AgentComponents/AgentFooter'

function RouteGridComponents(route){
    return(
        <Route 
            exact path={route.path} 
            render={props => (
                <>
                    {route.topComponent}
                    <GridChooser 
                        {...props} 
                        title={route.title}
                        info={route.info}
                        storeData={route.storeData}/>
                </>
            )}
        />
    )
}


export default function AgentHome(){
    return(
        <body>
            <AgentHeader/>
            <div className="home-div">

                {/* some routes for the header */}
                {/* does not hold home because that is a grid
                display */}
                {RouteConstants.agentHeaderInfo.map((headerInfo) => (
                    <Route
                        exact path={headerInfo.path}
                        component={() => (
                        <>
                            {TopAgent.simple(headerInfo.title)} 
                        </> 
                    )}/>
                ))}

                {RouteConstants.gridRouteInfo.map((route, index) => (
                    <RouteGridComponents key={"grid-route"+index} {...route} />
                ))}

                {RouteConstants.newBizInfo.map((route, i) => (
                    <Route
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
                {RouteConstants.existingClientInfo.map((route) => (
                    <Route
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
                                <route.botComponent/>
                            </>
                        )}
                    />
                ))}

            </div>
            <AgentFooter/>
        </body>
    )
}
