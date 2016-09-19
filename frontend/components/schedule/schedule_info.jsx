import React from 'react';
import ScheduleDetail from './schedule_detail.jsx';

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
      return <ScheduleDetail route={routes[id]} />;
    });
    return(
      <ul className='all-schedules'>
      {content}
      </ul>
    );
  }
}

export default ScheduleInfo;
