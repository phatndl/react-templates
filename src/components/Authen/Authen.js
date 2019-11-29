import React from 'react';
import { useSelector } from 'react-redux';
// import TokenControl from 'utils/token';
import { Login } from 'pages';

/**
 * @type {React.SFC<import('types').DropdownListProps>}
 */
const Auth = () => {
  // const token = TokenControl.Token();
  const token = '';
  const user = useSelector(state => state.user);
  console.log('user: ', user);
  return <div>{token ? <Login token={token} /> : <Login token='' />}</div>;
};

export default Auth;
