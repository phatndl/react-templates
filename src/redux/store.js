import { createStore, applyMiddleware, combineReducers } from 'redux';
import middleware from './middleware';
import { userReducer, modalReducer } from 'reducers';
import LoaderReducer from 'components/Loader/Loader.reducer';

const reducers = combineReducers({
  user: userReducer,
  modal: modalReducer,
  loader: LoaderReducer,
});
// create-store
const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
