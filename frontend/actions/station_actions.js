export const STATION_CONSTANTS = {
  REQUEST_ALL_STATIONS: 'REQUEST_ALL_STATIONS',
  RECEIVE_ALL_STATIONS: 'RECEIVE_ALL_STATIONS'
};

export const requestAllStations = () => ({
  type: STATION_CONSTANTS.REQUEST_ALL_STATIONS
});

export const receiveAllStations = (data) => ({
  type: STATION_CONSTANTS.RECEIVE_ALL_STATIONS,
  data
});
