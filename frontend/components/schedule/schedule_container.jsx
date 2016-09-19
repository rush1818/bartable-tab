import { connect } from 'react-redux';
import {requestSchedule} from '../../actions/station_actions.js';
import ScheduleInfo from './schedule_info.jsx';

const mapStateToProps = (state, ownProps) => {
    return ({
    orig: ownProps.orig,
    dest: ownProps.dest,
    schedule: state.schedule
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
 requestSchedule: () => (dispatch(requestSchedule(ownProps.orig, ownProps.dest)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleInfo);
