import {STATION_CONSTANTS} from '../actions/station_actions.js';
import {merge} from 'lodash';

const SavedScheduleReducer = (state = {}, action) => {
  switch (action.type) {
    case STATION_CONSTANTS.RECEIVE_SCHEDULE_STORAGE:
      return merge({}, action.data.scheduleInfo);
    case STATION_CONSTANTS.REMOVE_SAVED_SCHEDULE:
      let newState = merge({}, state);
      let keys = Object.keys(newState);
      keys.forEach(key => {
        if (newState[key].orig === action.orig && newState[key].dest === action.dest){
          delete newState[key];
        }
      });
      return newState;
    default:
      return state;

  }
};

export default SavedScheduleReducer;
