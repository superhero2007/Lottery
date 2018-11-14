import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const WalletRoute = ({ component: Component, isAuthenticated, to, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
        ? (<Component {...props} />)
        : (
          <Redirect
            to={{
              pathname: to,
              state: { redirect: props.location.pathname, isAuthenticated },
            }}
          />
        )
    )}
  />
);

WalletRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

WalletRoute.defaultProps = {
  to: '/',
};

export default WalletRoute;
