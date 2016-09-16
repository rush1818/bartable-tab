import React from 'react';
import StationList from './station_list.jsx';
import Select from 'react-select';

class AllStations extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedStation: null};
    this.options = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  handleChange(e){
    console.log(e.target.value);
  }

  handleClick(station){
    const that = this;
    return (e) => {
      e.preventDefault();
      that.setState({selectedStation: station});
    };
  }

  handleSelect(value) {
    this.setState({selectedStation: value});
  }
  render() {
    let content;
    if (Object.keys(this.props.stations).length){
      content = (
        <Select name='stations' placeholder="Select a station" value={this.state.selectedStation} options={this.options} onChange={this.handleSelect}/>
      )
    } else {
      content = (
        'Stations'
      );
    }
    return (
      <div>
      {content}
      </div>
    );
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
export default AllStations;
