import React, {useState} from 'react';
import {HashRouter, Link, Route, Redirect, withRouter} from 'react-router-dom'
import AgentRouter from './pages/AgentPages/AgentRouter'
import Home from './pages/LandingPages/Home'
// import {auth} from './components/AuthHelpers'
// import Login from './components/LandingComponents/Login'


function App(){

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <HashRouter className="App">
      <div>
        <button onClick={auth.authenticate(() => {})}>
          Log In
        </button>
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
        {/* <Route path="/login" component={authButton} /> */}
        <PrivateRoute path="/protected" component={() => <AgentRouter/>} />
      </div>
    </HashRouter>
  )
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? (
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

const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


// export default AuthExample;
export default App;
