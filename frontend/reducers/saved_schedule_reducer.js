import {STATION_CONSTANTS} from '../actions/station_actions.js';
import {merge} from 'lodash';

const SavedScheduleReducer = (state = {}, action) => {
  switch (action.type) {
    case STATION_CONSTANTS.RECEIVE_SCHEDULE_STORAGE:
      return merge({}, action.data.scheduleInfo);
    default:
      return state;

  }
};

export default SavedScheduleReducer;
