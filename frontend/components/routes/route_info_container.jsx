import { connect } from 'react-redux';
import RouteInfo from './route_info.jsx';
import {requestRTDForStation} from '../../actions/station_actions.js';

const mapStateToProps = (state, ownProps) => {
    return ({
    realTime: state.realTime,
    abbr: ownProps.abbr ? ownProps.abbr.value : null
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestRTDForStation: (data) => dispatch(requestRTDForStation(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteInfo);
