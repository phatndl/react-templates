import React from 'react';
import './App.css';
import { routes } from 'constants/routes';
import { Redirect, Switch, Route, Router, HashRouter } from 'react-router-dom';
import { Authen, PrivateRoute, BrowserRouter, Loader, AppRoute } from 'components';
import { useDispatch } from 'react-redux';
import { userService } from 'services';
import { Helmet } from "react-helmet";
import i8next from "./i18n";
import { createBrowserHistory } from 'history';
import { useTranslation } from 'react-i18next';

// const history = createBrowserHistory();

function App() {

  const { t } = useTranslation();

  const handleLoader = () => {
    userService.getRandomUser();
    i8next.changeLanguage('vi');
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('TITLE')}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HashRouter >
        <Route
          render = {() => {
            return(
              <Switch>
                // App route here
                <Route component={({history}) => {
                  return(
                    <h1 onClick={() => {
                      history.push('/home')
                    }}>Trang chủ 1</h1>
                  )
                }}  path='/' exact={true} />
                // Private route here
                <Route component={({history}) => {
                  return(
                    <h1
                    onClick={() => {
                      history.push('/')
                    }}
                    >HOME</h1>
                  )
                }}  path='/home' />
                {/* <Redirect to='/home' /> */}
              </Switch>
            )
          }}
        />
      </HashRouter>

      // Modal, Loader
      <Loader />
    </>
  );
}

export default App;
