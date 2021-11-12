import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function PrivateRoute({ element: Element, IsClosed, ...rest }) {
  const isLoggedIn = false;

  if (IsClosed && !isLoggedIn) {
    return (
      <Navigate
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    )
  }

  return <Route {...rest} element={Element}/> // component={Component}
}

PrivateRoute.defaultProps = {
  IsClosed: false
}

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  IsClosed: PropTypes.bool
}