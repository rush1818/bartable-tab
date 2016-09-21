import React from 'react';
import ScheduleDetail from './schedule_detail.jsx';
import {merge} from 'lodash';

let firstUpdate = true;
let timeOutTime;
class ScheduleInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {hidden: true};
    this.updateSchedule = this.updateSchedule.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount(){
    this.updateSchedule(firstUpdate);
  }
  updateSchedule(){
    timeOutTime = timeOutTime && timeOutTime !== 2000 ? 4000 : 2000;

    const that = this;
    window.setTimeout(()=> {
      that.props.requestSchedule();
      that.updateSchedule();
    }, timeOutTime);
  }

  handleShow(e){
    e.preventDefault();
    this.state.hidden ? this.setState({hidden: false}) : this.setState({hidden: true});
  }

  render() {
    let content;
    if (!this.state.hidden && this.props.schedule && this.props.schedule[this.props.orig] && this.props.schedule[this.props.orig][this.props.dest]){
      const routes = this.props.schedule[this.props.orig][this.props.dest];
      content = Object.keys(routes).map(id => {
        return (

          <ScheduleDetail route={routes[id]} key={Date.now() + id} className='saved-time-results' />
        );
      });
    }
    return(
      <ul className='all-schedules' key={Date.now()}>
      <span className='saved-from-to' key={Date.now() + this.props.orig} onClick={this.handleShow} >From: {this.props.orig} To: {this.props.dest}
      </span>
      {content}
      </ul>
    );
  }
}

export default ScheduleInfo;
