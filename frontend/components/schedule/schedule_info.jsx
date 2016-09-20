import React from 'react';
import ScheduleDetail from './schedule_detail.jsx';
import {merge} from 'lodash';

let firstUpdate = true;
let timeOutTime;
class ScheduleInfo extends React.Component {
  constructor(props){
    super(props);
    this.updateSchedule = this.updateSchedule.bind(this);
  }

  componentDidMount(){
    this.updateSchedule(firstUpdate);
  }
  updateSchedule(){

    if (firstUpdate){
      timeOutTime = 4000;
      firstUpdate = false;
    } else {
      timeOutTime = 4000;
    }
    const that = this;
    window.setTimeout(()=> {
      console.log('running update');
      that.props.requestSchedule();
      that.updateSchedule();
    }, timeOutTime);
  }

  render() {
    let content;
    if (this.props.schedule && this.props.schedule[this.props.orig] && this.props.schedule[this.props.orig][this.props.dest]){
      const routes = this.props.schedule[this.props.orig][this.props.dest];
      content = Object.keys(routes).map(id => {
        return (

          <ScheduleDetail route={routes[id]} key={Date.now() + id}/>
        );
      });
    }
    return(
      <ul className='all-schedules' key={Date.now()}>
      <span className='saved-from-to' key={Date.now() + this.props.orig}>From: {this.props.orig} To: {this.props.dest}
      </span>
      {content}
      </ul>
    );
  }
}

export default ScheduleInfo;
