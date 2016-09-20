import { connect } from 'react-redux';
import {requestScheduleStorage} from '../../actions/station_actions.js';
import SavedRoutesIndex from './saved_routes_index.jsx';

const mapStateToProps = (state, ownProps) => {
    return ({
    savedSchedule: state.savedSchedule
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestScheduleStorage: () => (dispatch(requestScheduleStorage()))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedRoutesIndex);
