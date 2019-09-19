import { createStore, applyMiddleware, combineReducers } from 'redux';
import loginReducer from 'pages/login/login.reducer';
import middleware from './middleware';

const reducers = combineReducers({ loginReducer });
// create-store
const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
