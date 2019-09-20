import React, {useState, useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";


//will learn about this soon
export function ProtectedRoute({component: Component, ...rest})  {
  const [authentication, setAuthentication] = useState('pending');

  useEffect(() => {
    auth.checkAuthentication().then(result => setAuthentication(result));
  }, []);

  if (authentication === 'pending') {
    return null; // or some placeholder
  } else if (authentication === false) {
    return (
      <Redirect
        to={"/SignIn"}
      />
    )
  } else {
    return <Route {...rest} render={props => <Component {...props} />}/>
  }
};
