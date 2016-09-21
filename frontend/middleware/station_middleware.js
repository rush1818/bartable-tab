import { fetchAllStationsAPI, xmlToJson, fetchAllStationsStorage, fetchRTDStationAPI, fetchRouteScheduleAPI, fetchSavedSchedulesStorage, removeSavedScheduleStorage} from './../util/bart_api.js';
import {STATION_CONSTANTS, receiveAllStations, receiveAllStationsStorage, receiveRTDForStation, receiveSchedule, receiveScheduleStorage} from '../actions/station_actions.js';


const StationMiddlware = store => next => action => {

  switch (action.type) {
    case STATION_CONSTANTS.REQUEST_ALL_STATIONS:
      fetchAllStationsAPI((data) => store.dispatch(receiveAllStations(xmlToJson(data))));
      return next(action);
    case STATION_CONSTANTS.REQUEST_ALL_STATIONS_STORAGE:
      fetchAllStationsStorage(data => store.dispatch(receiveAllStationsStorage(data)));
      return next(action);
    case STATION_CONSTANTS.REQUEST_RTD_STATION:
      fetchRTDStationAPI(data => (store.dispatch(receiveRTDForStation(xmlToJson(data)))), action.station);
      return next(action);
    case STATION_CONSTANTS.REQUEST_SCHEDULE:
      fetchRouteScheduleAPI(data => (store.dispatch(receiveSchedule(action.orig, action.dest, xmlToJson(data)))), action.orig, action.dest);
      return next(action);
    case STATION_CONSTANTS.REQUEST_SCHEDULE_STORAGE:
      fetchSavedSchedulesStorage(data => (store.dispatch(receiveScheduleStorage(data))));
      return next(action);
    case STATION_CONSTANTS.REMOVE_SAVED_SCHEDULE:
      let success = () => (next(action));
      return removeSavedScheduleStorage(success, action.orig, action.dest);
    default:
      return next(action);
  }
};

export default StationMiddlware;
