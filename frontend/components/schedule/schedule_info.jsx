import React from 'react';
import ScheduleDetail from './schedule_detail.jsx';
import {merge} from 'lodash';

class ScheduleInfo extends React.Component {
  constructor(props){
    super(props);
    this.updateSchedule = this.updateSchedule.bind(this);
  }

  componentDidMount(){
    this.updateSchedule();
  }
  updateSchedule(){
    const that = this;
    window.setTimeout(()=> {
      console.log('running update');
      that.props.requestSchedule();
      that.updateSchedule();
    }, 5000);
  }

  render() {
    let content;
    const routes = this.props.schedule[this.props.orig][this.props.dest];
    content = Object.keys(routes).map(id => {
      return <ScheduleDetail route={routes[id]} key={Date.now() + id}/>;
    });
    return(
      <ul className='all-schedules' key={Date.now()}>
      {content}
      </ul>
    );
  }
}

export default ScheduleInfo;
