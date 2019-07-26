import React from 'react'
import AgentHeader from '../../components/AgentComponents/AgentHeader'
import './AgentHome.scss'
import GridChooser from '../../components/AgentComponents/GridChooser'
import {Route} from 'react-router-dom'
import * as RouteConstants from '../../utils/RouteConstants'
import * as TopAgent from '../../components/AgentComponents/TopAgent'
import AgentFooter from '../../components/AgentComponents/AgentFooter'

const gridRouteInfo = [RouteConstants.homeInfo,
    RouteConstants.newBizInfo,
    RouteConstants.existingClientInfo]

const gridRoutes = RouteConstants.gridRouteInfo.map((info, i) => {
    const content = {
        path: info.path,
        topComponent: info.topComponent,
        info:gridRouteInfo[i]
    }
    return content
})

function RoutePropComponent(route){
    return(
        <Route 
            exact path={route.path} 
            render={props => (
                <div>
                    {route.topComponent}
                    <GridChooser {...props} info={route.info} />
                </div>
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
                        <div>
                            {TopAgent.simple(headerInfo.title)} 
                        </div> 
                    )}/>
                ))}



                {/* MAP Grid Navigation Components */}
                {gridRoutes.map((route, i) => (
                    <RoutePropComponent key={"grid-route"+i} {...route} />
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
