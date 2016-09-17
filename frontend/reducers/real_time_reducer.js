import {STATION_CONSTANTS} from '../actions/station_actions.js';
import {saveAllStationsStorage} from '../util/bart_api.js';
import {merge} from 'lodash';
const RTDReducer = (state = {}, action) => {
  switch (action.type) {
    case STATION_CONSTANTS.RECEIVE_RTD_STATION:
      let newState = {};
      let newData = action.data.root.station.etd;
      if (newData instanceof Array){
        newData.forEach(route => {
          newState[route.abbreviation['#text']] = route.estimate;
        });
      } else {
        newState[newData.abbreviation['#text']] = newData.estimate;
      }
      return merge({}, newState);
    default:
      return state;

  }
};

export default RTDReducer;
