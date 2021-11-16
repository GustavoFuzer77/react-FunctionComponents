import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

export default function PrivateRoute({ component: Component, IsClosed, ...rest }) {
  const isLoggedIn = false;

  if (IsClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    )
  }

  return <Route {...rest} component={Component}/> // component={Component}
}

PrivateRoute.defaultProps = {
  IsClosed: false
}

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  IsClosed: PropTypes.bool
}