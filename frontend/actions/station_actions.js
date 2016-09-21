export const STATION_CONSTANTS = {
  REQUEST_ALL_STATIONS: 'REQUEST_ALL_STATIONS',
  RECEIVE_ALL_STATIONS: 'RECEIVE_ALL_STATIONS',

  REQUEST_ALL_STATIONS_STORAGE: 'REQUEST_ALL_STATIONS_STORAGE',
  RECEIVE_ALL_STATIONS_STORAGE: 'RECEIVE_ALL_STATIONS_STORAGE',

  REQUEST_RTD_STATION: 'REQUEST_RTD_STATION',
  RECEIVE_RTD_STATION: 'RECEIVE_RTD_STATION',

  RECEIVE_SCHEDULE: 'RECEIVE_SCHEDULE',
  REQUEST_SCHEDULE: 'REQUEST_SCHEDULE',

  REQUEST_SCHEDULE_STORAGE: 'REQUEST_SCHEDULE_STORAGE',
  RECEIVE_SCHEDULE_STORAGE: 'RECEIVE_SCHEDULE_STORAGE',

  REMOVE_SAVED_SCHEDULE: 'REMOVE_SAVED_SCHEDULE'
};

export const requestAllStations = () => ({
  type: STATION_CONSTANTS.REQUEST_ALL_STATIONS
});

export const receiveAllStations = (data) => ({
  type: STATION_CONSTANTS.RECEIVE_ALL_STATIONS,
  data
});



export const requestAllStationsStorage = () => ({
  type: STATION_CONSTANTS.REQUEST_ALL_STATIONS_STORAGE
});

export const receiveAllStationsStorage = (data) => ({
  type: STATION_CONSTANTS.RECEIVE_ALL_STATIONS_STORAGE,
  data
});


export const requestRTDForStation = (station) => ({
  type: STATION_CONSTANTS.REQUEST_RTD_STATION,
  station
});
export const receiveRTDForStation = (data) => ({
  type: STATION_CONSTANTS.RECEIVE_RTD_STATION,
  data
});


export const requestSchedule = (orig, dest) => ({
  type: STATION_CONSTANTS.REQUEST_SCHEDULE,
  orig,
  dest
});

export const receiveSchedule = (orig, dest, data) => ({
  type: STATION_CONSTANTS.RECEIVE_SCHEDULE,
  data,
  orig,
  dest
});


export const requestScheduleStorage = () => ({
  type: STATION_CONSTANTS.REQUEST_SCHEDULE_STORAGE
});

export const receiveScheduleStorage = (data) => ({
  type: STATION_CONSTANTS.RECEIVE_SCHEDULE_STORAGE,
  data
});

export const removeSavedSchedule = (orig, dest) => ({
  type: STATION_CONSTANTS.REMOVE_SAVED_SCHEDULE,
  orig,
  dest
});
