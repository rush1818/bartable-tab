import React from 'react';
import StationsContainer from './stations_container.jsx';
import ScheduleContainer from '../schedule/schedule_container.jsx'

class StationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {toSelectedStation: "", fromSelectedStation: ""};
    this.options = [];

    this.handleChange = this.handleChange.bind(this);
    this.buildSchedule = this.buildSchedule.bind(this);
  }
  componentDidMount(){
    this.props.requestAllStationsStorage();
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
      this.setState({[type]: value});
      setTimeout(()=>{
        if (this.state.toSelectedStation !== "" && this.state.fromSelectedStation !== "" && this.state.toSelectedStation !== this.state.fromSelectedStation){
          this.buildSchedule();
        }
      }, 100);
    };
  }
  render() {
    let scheduleContent;
    const schedules = this.props.schedule;
    const keys = Object.keys(schedules);
    if (keys.length && schedules[this.state.fromSelectedStation.value][this.state.toSelectedStation.value]){
      scheduleContent = (<ScheduleContainer orig={this.state.fromSelectedStation.value} dest={this.state.toSelectedStation.value} />);
    }
    return (<div>
      <StationsContainer type='from' handleChange={this.handleChange('fromSelectedStation')} selectedStation={this.state.fromSelectedStation} options={this.options} />
      <StationsContainer type='to' handleChange={this.handleChange('toSelectedStation')} selectedStation={this.state.toSelectedStation} options={this.options}/>
      {scheduleContent}
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
