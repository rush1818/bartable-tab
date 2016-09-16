import {STATION_CONSTANTS} from '../actions/station_actions.js';
import {saveAllStationsStorage} from '../util/bart_api.js';
import {merge} from 'lodash';
const StationsReducer = (state = {}, action) => {
  switch (action.type) {
    case STATION_CONSTANTS.RECEIVE_ALL_STATIONS:
      let newState = {};
      let stations = action.data.root.stations.station;
      stations.forEach((station, id) => {
        newState[id] = station;
      });
      saveAllStationsStorage(merge({}, newState));
      return newState;
    case STATION_CONSTANTS.RECEIVE_ALL_STATIONS_STORAGE:
      return merge({} , action.data.allStationsList);
    default:
      return state;

  }
};

export default StationsReducer;
