import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import TokenControl from 'utils/token';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  // const token = TokenControl.Token();
  const token = '';
  if (token) {
    return <Route component={Component} {...rest} />;
  }

  return (
    <Redirect
      to={{
        pathname: '/',
        state: location,
      }}
    />
  );
};

export default PrivateRoute;
