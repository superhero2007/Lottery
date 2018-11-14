import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const SignInRoute = ({ component: Component, isAuthenticated, to, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
        ? (<Redirect to={to} />)
        : (<Component {...props} />)
    )}
  />
);

SignInRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  to: PropTypes.string,
};

SignInRoute.defaultProps = {
  to: '/lottery',
};

export default SignInRoute;
