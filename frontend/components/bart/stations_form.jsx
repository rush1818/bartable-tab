import React from 'react';
import StationsContainer from './stations_container.jsx';

class StationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {toSelectedStation: "", fromSelectedStation: ""};
    this.options = [];

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    // this.props.requestAllStations();
    this.props.requestAllStationsStorage();
  }

  componentDidUpdate(){
    if (!this.options.length){
      buildOptions(this.options, this.props.stations);
    }
  }

  handleChange(type) {
    return (value) => {
      this.setState({[type]: value});
    };
  }
  render() {
    return (<div>
      <StationsContainer type='from' handleChange={this.handleChange('fromSelectedStation')} selectedStation={this.state.fromSelectedStation} options={this.options} />
      <StationsContainer type='to' handleChange={this.handleChange('toSelectedStation')} selectedStation={this.state.toSelectedStation} options={this.options}/>
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
