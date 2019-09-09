import React, {useState} from 'react';
import {HashRouter, Link, Route, Switch} from 'react-router-dom'
import AgentRouter from './AgentRouter'
import Home from './Home'
import { ProtectedRoute } from "./utils/protected.route";
import { history } from "./utils/history";


function App(){

  const [loggedIn, setLoggedIn] = useState(false)

  const signIn = "/SignIn"
  const agent = "/Agent"

  return (
    <HashRouter history={history} className="App">
      <div>
        <ul>
          <li>
            <Link to={signIn}>Sign in Page</Link>
          </li>
          <li>
            <Link to={agent}>Protected Agent Page</Link>
          </li>
        </ul>

        <Switch>
          <Route 
            path={signIn}
            render={() => (<Home loggedIn={loggedIn}/>)}
            key={"thelandingpageasdlkfjsadeoixfks"}/>
          <ProtectedRoute 
            path={agent}
            component={() => <AgentRouter/>}
          />
        </Switch>
      </div>
    </HashRouter>
  )
}




// export default AuthExample;
export default App;
