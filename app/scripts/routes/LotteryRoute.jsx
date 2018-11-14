import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const LotteryRoute = ({ component: Component, isAuthenticated, to, ...rest }) => (
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

LotteryRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

LotteryRoute.defaultProps = {
  to: '/',
};

export default LotteryRoute;
