import { connect } from 'react-redux';
import StationInfo from './station_info.jsx';
import {requestRTDForStation} from '../../actions/station_actions.js';

const mapStateToProps = (state, ownProps) => {
    return ({
    realTime: state.realTime,
    abbr: ownProps.abbr.value
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestRTDForStation: (data) => dispatch(requestRTDForStation(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationInfo);
