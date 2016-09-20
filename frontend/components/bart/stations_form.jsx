/*globals chrome*/
import React from 'react';
import {merge} from 'lodash';
import StationsContainer from './stations_container.jsx';
import ScheduleContainer from '../schedule/schedule_container.jsx';

class StationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {toSelectedStation: "", fromSelectedStation: ""};
    this.options = [];
    this.scheduleContent = null;

    this.handleChange = this.handleChange.bind(this);
    this.buildSchedule = this.buildSchedule.bind(this);
    this.clearValues = this.clearValues.bind(this);
    this.saveRoute = this.saveRoute.bind(this);
  }
  componentWillMount(){
    this.props.requestAllStationsStorage();
  }
  componentDidMount(){
    this.props.requestAllStations();
  }

  componentDidUpdate(){
    if (!this.options.length){
      buildOptions(this.options, this.props.stations);
    }
  }

  buildSchedule() {
    this.props.requestSchedule(this.state.fromSelectedStation.value, this.state.toSelectedStation.value);
  }

  handleChange(type) {
    return (value) => {
      this.setState({[type]: value, clear: false});
      setTimeout(()=>{
        if (this.state.toSelectedStation !== "" && this.state.fromSelectedStation !== "" && this.state.toSelectedStation !== this.state.fromSelectedStation){
          this.buildSchedule();
        }
      }, 100);
    };
  }

  clearValues(){
    this.setState({toSelectedStation: "", fromSelectedStation: ""});
  }

  saveRoute(){
    const that = this;
    chrome.storage.local.get('scheduleInfo', data => {
      console.log(data);
      let key;
      if (!Object.keys(data).length){
        data = {};
        key = 0;
      } else {
        key = Object.keys(data['scheduleInfo']).length;
        console.log(key);
      }
      let saveData = {};
      saveData[key] = {orig: this.state.fromSelectedStation.value, dest: this.state.toSelectedStation.value};
      saveData = merge({}, data, {'scheduleInfo': saveData});

      chrome.storage.local.set(saveData, function() {
        // Notify that we saved.
        console.log('schedule saved');
        that.scheduleContent = null;
        // add callback to fetch stored routes so that they can render and clear the results
        that.clearValues()
        that.props.requestScheduleStorage();
      });
    });
  }
  //
  render() {
    const schedules = this.props.schedule;
    const keys = Object.keys(schedules);
    if (this.state.fromSelectedStation !== "" && this.state.toSelectedStation !== "" && keys.length && schedules[this.state.fromSelectedStation.value][this.state.toSelectedStation.value]){
      this.scheduleContent = (
        <div className='schedule-result-box'>
        <div onClick={this.saveRoute}>Save Routes New</div>
        <ScheduleContainer orig={this.state.fromSelectedStation.value} dest={this.state.toSelectedStation.value} />
        </div>);
    }
    return (<div className='station-form'>
        <h1>View Route Schedule</h1>

        <div className='form-dropdowns'>
          <StationsContainer type='from' handleChange={this.handleChange('fromSelectedStation')} selectedStation={this.state.fromSelectedStation} options={this.options} />

          <StationsContainer type='to' handleChange={this.handleChange('toSelectedStation')} selectedStation={this.state.toSelectedStation} options={this.options}/>
        </div>

        <div className='form-results'>
          {this.scheduleContent}
        </div>

      </div>);
  }
}

const buildOptions = (obj, stations) => {
  Object.keys(stations).forEach(key => {
    let currStation = stations[key];
    let value = currStation.abbr["#text"];
    let label = currStation.name["#text"];
    obj.push({value, label});
  });
};

export default StationForm;
