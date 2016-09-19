import {STATION_CONSTANTS} from '../actions/station_actions.js';
import {fetchRouteScheduleAPI} from '../util/bart_api.js';
import {merge} from 'lodash';

const ScheduleReducer = (state = {}, action) => {
  switch (action.type) {
    case STATION_CONSTANTS.RECEIVE_SCHEDULE:
      let newState = {};
      let newData = action.data.root.schedule.request.trip;
      newState[action.orig] = {};
      newState[action.orig][action.dest] = {};
      newData.forEach((route, id) => {

        newState[action.orig][action.dest][id] = route;
      });
      return merge({}, state, newState);
    default:
      return state;

  }
};

export default ScheduleReducer;
