import React, {Component} from 'react';
import {HashRouter, Link, Route, Redirect, withRouter} from 'react-router-dom'
import AgentRouter from './pages/AgentPages/AgentRouter'
import Home from './pages/LandingPages/Home'
import {auth} from './components/AuthHelpers'

function App(){

  

  return (
    <HashRouter className="App">
      <div>
        {/* <AuthButton/> */}
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
          render={() => (<Home auth={auth}/>)}
          key = "the-landing-page"/>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={<AgentRouter auth={auth}/>} />
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


class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    auth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

// export default AuthExample;
export default App;
