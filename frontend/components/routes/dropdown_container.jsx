import { connect } from 'react-redux';
import DropDown from './dropdown.jsx';
import {requestAllStations, requestAllStationsStorage, requestRTDForStation} from '../../actions/station_actions.js';


const mapStateToProps = (state, ownProps) => {
    return ({
    stations: state.stations
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAllStations: (data) => dispatch(requestAllStations(data)),
  requestAllStationsStorage: (data) => dispatch(requestAllStationsStorage(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDown);
