import axios from 'axios';
import { useDispatch } from 'react-redux';
import  { actions as loaderActions } from 'components/Loader';
import store from 'redux/store';
require('dotenv').config('')

const initApiHandler = (baseURL) => {
  const instance = axios.create({
    baseURL,
    headers: {'Content-type': 'application/json'}
  });

  instance.interceptors.request.use(function(config){
    // check token
    config.headers.authorization = ''

    store.dispatch(loaderActions.toggleLoader(true));

    return config;

  }, function(error){
    return Promise.reject(error);
  })

  instance.interceptors.response.use(function(response){
    store.dispatch(loaderActions.toggleLoader(false));
    return response;
  }, function(error){
    store.dispatch(loaderActions.toggleLoader(false));
    return Promise.reject(error);
  })

  return instance;
}

export const apiDev = initApiHandler(process.env.REACT_APP_STAGING_ENV);
