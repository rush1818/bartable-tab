import React from 'react';
import ScheduleDetail from './schedule_detail.jsx';
import {merge} from 'lodash';

class ScheduleInfo extends React.Component {
  constructor(props){
    super(props);
    this.updateSchedule = this.updateSchedule.bind(this);
    this.saveRoute = this.saveRoute.bind(this);
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

  saveRoute(e){
    e.preventDefault();

    chrome.storage.sync.get('scheduleInfo', data => {
      let key;
      if (!data){
        data = {};
        key = 0;
      } else {
        key = Object.keys(data).length;
      }
      let saveData = {};
      saveData[key] = {orig: this.props.orig, dest: this.props.dest};
      saveData = merge({}, data, saveData);

      chrome.storage.sync.set({'scheduleInfo': saveData }, function() {
        // Notify that we saved.
        console.log('schedule saved');
        // add callback to fetch stored routes so that they can render
      });
    })

  }

  render() {
    let content;
    const routes = this.props.schedule[this.props.orig][this.props.dest];
    content = Object.keys(routes).map(id => {
      return <ScheduleDetail route={routes[id]} />;
    });
    return(
      <ul className='all-schedules'>
      <span onClick={this.saveRoute}>Save Route</span>
      {content}
      </ul>
    );
  }
}

export default ScheduleInfo;
