import {combineReducers} from 'redux';
import StationsReducer from './stations_reducer.js';
import RTDReducer from './real_time_reducer.js';

export default combineReducers(
  {
    stations: StationsReducer,
    realTime: RTDReducer
  }
);
