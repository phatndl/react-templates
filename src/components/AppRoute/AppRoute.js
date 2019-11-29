import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({ component: Component, ...rest }) => {
  return <Route component={Component} {...rest} />;
};

export default AppRoute;
