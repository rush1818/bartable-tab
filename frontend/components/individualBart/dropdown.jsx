import React from 'react';
import StationsContainer from '../bart/stations_container.jsx';
import StationInfoContainer from './station_info_container.jsx';

class DropDown extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedStation: ""};
    this.options = [];

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    // this.props.requestAllStations();
    this.props.requestAllStationsStorage();
    // this.props.requestRTDForStation('24TH');
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
      <StationsContainer type='View Station Info' handleChange={this.handleChange('selectedStation')} selectedStation={this.state.selectedStation} options={this.options} />
      <StationInfoContainer abbr={this.state.selectedStation}/>
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

export default DropDown;
