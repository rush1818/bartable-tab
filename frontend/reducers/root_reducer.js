import {combineReducers} from 'redux';
import StationsReducer from './stations_reducer.js';
import RTDReducer from './real_time_reducer.js';
import ScheduleReducer from './schedule_reducer.js';
import SavedScheduleReducer from './saved_schedule_reducer.js';

export default combineReducers(
  {
    stations: StationsReducer,
    realTime: RTDReducer,
    schedule: ScheduleReducer,
    savedSchedule: SavedScheduleReducer
  }
);
