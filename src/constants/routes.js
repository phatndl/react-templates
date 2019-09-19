import React from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h1>Public</h1>,
  },
  {
    path: '/protected',
    exact: false,
    authen: true,
    main: () => <h1>Protected</h1>,
  },
  {
    path: '*',
    exact: false,
    main: ({ match }) => <h1>Not Found {match.pathname}</h1>,
  },
];

export { routes };
