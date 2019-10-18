import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import AgentRouter from './AgentRouter'
import Home from './Home'
import SignUp from './components/LandingComponents/SignUp'
import { ProtectedRoute } from "./utils/protected.route";
import { history } from "./utils/history";
import * as RouteConstants from "./utils/RouteConstants" 

function App(){
  return (
    <HashRouter history={history} className="App">
      <div>
        <Switch>
          <Route
            path={RouteConstants.signUpPath}
            component={() => (<SignUp/>)}
            key="sign-up-page-1"/> 
          <Route 
            exact path={RouteConstants.signInPath}
            render={() => (<Home/>)}
            key={"the_landing_page"+1}/>
          <ProtectedRoute 
              path={RouteConstants.baseURL}
              component={() => <AgentRouter/>}
              key ="the-agent-of-lord-routes"/>
        </Switch>
      </div>
    </HashRouter>
  )
}




// export default AuthExample;
export default App;
