import React, {useState} from 'react';
import {HashRouter, Link, Route, Redirect, withRouter} from 'react-router-dom'
import AgentRouter from './pages/AgentPages/AgentRouter'
import Home from './pages/LandingPages/Home'


function App(){

  const [loggedIn, setLoggedIn] = useState(false)

  function authenticate(){
    console.log(loggedIn)
    setLoggedIn(true)
  }

  function signOut(){
    setLoggedIn(false)
  }

  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          loggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  return (
    <HashRouter className="App">
      <div>
        {loggedIn ? (
          <p> 
            you are logged In
            <Redirect to="/protected"/>
          </p>
          
        ) : (
          <button onClick={() => authenticate()}>
            Log In
          </button>
        )}
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route 
          path="/public" 
          render={() => (<Home loggedIn={loggedIn}/>)}
          key = "the-landing-page"/>
        <Route 
          path="/login" 
          render={() => (<Home loggedIn={loggedIn}/>)}
          key = "the-landing-page"/>
        <PrivateRoute path="/protected" component={() => <AgentRouter/>} />
      </div>
    </HashRouter>
  )
}




// export default AuthExample;
export default App;
