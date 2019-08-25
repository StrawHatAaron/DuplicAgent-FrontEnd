import React from 'react'
import {withRouter} from 'react-router-dom'

export const auth = {
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

export const authButton = withRouter(
    ({ history }) =>
      auth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button onClick={() => {auth.signout(() => history.push("/"))}}>
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
  );