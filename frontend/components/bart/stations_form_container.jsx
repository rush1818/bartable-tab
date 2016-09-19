import { connect } from 'react-redux';
import StationForm from './stations_form.jsx';
import {requestAllStations, requestAllStationsStorage, requestRTDForStation, requestSchedule} from '../../actions/station_actions.js';

const mapStateToProps = (state, ownProps) => {
    return ({
    stations: state.stations,
    schedule: state.schedule
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAllStationsStorage: (data) => dispatch(requestAllStationsStorage(data)),
  requestSchedule: (orig, dest) => dispatch(requestSchedule(orig, dest))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationForm);
