import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import {history} from './history'

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) =>  {
  return (
    <Route
      {...rest}
      render={props => {
        // async function authCheck() {
        //   await auth.checkAuthentication()
        // }
        // var check = authCheck()
        if (auth.checkAuthentication(function(good){
          console.log(good)
        })) {
          console.log("hmmmmmmmmm true")
          return <Component {...props} />;
        } else {
          console.log("hmmmmmmmmm false")
          return (
            <Redirect
              to={{
                pathname: "/SignIn",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
