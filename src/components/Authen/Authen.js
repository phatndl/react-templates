import React from 'react';
import TokenControl from 'utils/token';
import { Login } from 'pages';

const Auth = () => {
  const token = TokenControl.Token();
  return <div>{token ? <Login token={token} /> : <Login token='' />}</div>;
};

export default Auth;
