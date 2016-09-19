import { connect } from 'react-redux';
import AllStations from './stations.jsx';
import {requestAllStations, requestAllStationsStorage} from '../../actions/station_actions.js';

const mapStateToProps = (state, ownProps) => {
    return ({
    stations: state.stations,
    type: ownProps.type,
    selectedStation: ownProps.selectedStation,
    options: ownProps.options
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAllStations: (data) => dispatch(requestAllStations(data)),
  requestAllStationsStorage: (data) => dispatch(requestAllStationsStorage(data)),
  handleChange: (value) => ownProps.handleChange(value)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStations);
