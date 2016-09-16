export const STATION_CONSTANTS = {
  REQUEST_ALL_STATIONS: 'REQUEST_ALL_STATIONS',
  RECEIVE_ALL_STATIONS: 'RECEIVE_ALL_STATIONS',

  REQUEST_ALL_STATIONS_STORAGE: 'REQUEST_ALL_STATIONS_STORAGE',
  RECEIVE_ALL_STATIONS_STORAGE: 'RECEIVE_ALL_STATIONS_STORAGE',

  REQUEST_RTD_STATION: 'REQUEST_RTD_STATION',
  RECEIVE_RTD_STATION: 'RECEIVE_RTD_STATION'
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
