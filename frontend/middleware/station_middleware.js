import { fetchAllStationsAPI, xmlToJson, fetchAllStationsStorage} from './../util/bart_api.js';
import {STATION_CONSTANTS, receiveAllStations, receiveAllStationsStorage} from '../actions/station_actions.js';


const StationMiddlware = store => next => action => {

  switch (action.type) {
    case STATION_CONSTANTS.REQUEST_ALL_STATIONS:
      fetchAllStationsAPI((data) => store.dispatch(receiveAllStations(xmlToJson(data))));
      return next(action);
    case STATION_CONSTANTS.REQUEST_ALL_STATIONS_STORAGE:
      fetchAllStationsStorage(data => store.dispatch(receiveAllStationsStorage(data)));
      return next(action);
    default:
      return next(action);
  }
};

export default StationMiddlware;
