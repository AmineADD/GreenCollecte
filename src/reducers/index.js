import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import settings from './settings';

const reducers = {
  routing: routerReducer,
  settings
};

export default combineReducers(reducers);
