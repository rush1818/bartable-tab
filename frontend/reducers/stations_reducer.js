import {STATION_CONSTANTS} from '../actions/station_actions.js';

const StationsReducer = (state = {}, action) => {
  switch (action.type) {
    case STATION_CONSTANTS.RECEIVE_ALL_STATIONS:
      let newState = {};
      let stations = action.data.root.stations.station;
      stations.forEach((station, id) => {
        newState[id] = station;
      });
      return newState;
    default:
      return state;

  }
};

export default StationsReducer;
