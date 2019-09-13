import React from 'react';
import {HashRouter, Link, Route, Switch} from 'react-router-dom'
import AgentRouter from './AgentRouter'
import Home from './Home'
import SignUp from './SignUp'
import { ProtectedRoute } from "./utils/protected.route";
import { history } from "./utils/history";
import * as RouteConstants from "./utils/RouteConstants" 

function App(){

  

  return (
    <HashRouter history={history} className="App">
      <div>
        <ul>
          <li>
            <Link to={RouteConstants.signInPath}>Sign in Page</Link>
          </li>
          <li>
            <Link to={RouteConstants.baseURL}>Protected Agent Page</Link>
          </li>
          <li>
            <Link to={RouteConstants.signUpPath}>Pawan's Sign Up Page</Link>
          </li>
        </ul>

        <Switch>


          <Route
            path={RouteConstants.signUpPath}
            component={() => (<SignUp/>)}
            key="sign-up-page-1"/>
          
          <Route 
            path={RouteConstants.signInPath}
            render={() => (<Home/>)}
            key={"the_landing_page"+1}/>
          <ProtectedRoute 
            path={RouteConstants.baseURL}
            component={() => <AgentRouter/>}
          />
        </Switch>
      </div>
    </HashRouter>
  )
}




// export default AuthExample;
export default App;
