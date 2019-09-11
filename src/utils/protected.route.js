import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (() => auth.checkAuthentication()) {
          return <Component {...props} />;
        } else {
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
