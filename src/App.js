import React from 'react';
import './App.css';
import { routes } from 'constants/routes';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Authen, PrivateRoute, CustomLink } from 'components';

function App() {
  return (
    <Router>
      <div className='App'>
        <Authen />
        <ul>
          <CustomLink>
            <CustomLink to='/public' label='aa'>
              Public Page
            </CustomLink>
          </CustomLink>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>
        <Switch>
          {routes.map(route => {
            return route.authen ? (
              <PrivateRoute
                // key={index}
                exact={route.exact}
                path={route.path}
                component={route.main}
              />
            ) : (
              <Route
                // key={index}
                exact={route.exact}
                path={route.path}
                component={route.main}
              />
            );
          })}
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
