/*globals chrome*/
import React from 'react';
import {merge} from 'lodash';
import StationsContainer from './stations_container.jsx';
import ScheduleContainer from '../schedule/schedule_container.jsx';
import onClickOutside from 'react-onclickoutside';

class StationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {toSelectedStation: "", fromSelectedStation: "", hidden: false};
    this.options = [];
    this.scheduleContent = null;

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.buildSchedule = this.buildSchedule.bind(this);
    this.clearValues = this.clearValues.bind(this);
    this.saveRoute = this.saveRoute.bind(this);
    this.checkValidCondition = this.checkValidCondition.bind(this);
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

  handleClickOutside(e){
    this.setState({hidden: true});
  }

  handleChange(type) {
    const that = this;
    return (value) => {
      that.setState({[type]: value, hidden: false});

      const myInterval = setInterval(()=>{
        if (that.checkValidCondition()){
          window.clearInterval(myInterval);
          that.buildSchedule();
        } else {
          this.scheduleContent = null;
        }
      }, 10);
    };
  }

  checkValidCondition(){
    const that = this;
    return that.state.fromSelectedStation && that.state.toSelectedStation && that.state.toSelectedStation !== "" && that.state.fromSelectedStation !== "" && that.state.toSelectedStation !== that.state.fromSelectedStation;
  }

  clearValues(){
    this.setState({toSelectedStation: "", fromSelectedStation: ""});
  }

  saveRoute(){
    const that = this;
    chrome.storage.local.get('scheduleInfo', data => {
      let key;
      if (!Object.keys(data).length){
        data = {};
        key = 0;
      } else {
        key = Object.keys(data['scheduleInfo']).length.toString();
        while (Object.keys(data['scheduleInfo']).includes(key)){
          key = (parseInt(key) + 1).toString();
        }
      }
      let saveData = {};
      saveData[key] = {orig: this.state.fromSelectedStation.value, dest: this.state.toSelectedStation.value};
      saveData = merge({}, data, {'scheduleInfo': saveData});
      chrome.storage.local.set(saveData, function() {
        that.scheduleContent = null;
        that.clearValues();
        that.props.requestScheduleStorage();
      });
    });
  }
  //
  render() {
    const schedules = this.props.schedule;
    const keys = Object.keys(schedules);
    if (this.state.fromSelectedStation && this.state.toSelectedStation && this.state.fromSelectedStation !== "" && this.state.toSelectedStation !== "" && keys.length && schedules[this.state.fromSelectedStation.value][this.state.toSelectedStation.value]){
      this.scheduleContent = this.state.hidden ? "" : (
        <div className='schedule-result-box'>
        <div onClick={this.saveRoute} className='save-route-button'>Save Route</div>
        <ScheduleContainer orig={this.state.fromSelectedStation.value} dest={this.state.toSelectedStation.value} hidden={'show'}/>
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

export default onClickOutside(StationForm);
