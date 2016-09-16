import {combineReducers} from 'redux';
import StationsReducer from './stations_reducer.js';

export default combineReducers(
  {
    stations: StationsReducer,
  }
);
