import { connect } from 'react-redux';
import AllStations from './stations.jsx';
import {requestAllStations} from '../../actions/station_actions.js';

const mapStateToProps = state => {
    return ({
    stations: state.stations
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllStations: (data) => dispatch(requestAllStations(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStations);
