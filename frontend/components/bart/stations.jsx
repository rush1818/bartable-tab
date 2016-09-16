import React from 'react';
import StationList from './station_list.jsx';

class AllStations extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedStation: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    // this.props.requestAllStations();
    this.props.requestAllStationsStorage();
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
  render() {
    let content;
    debugger
    if (Object.keys(this.props.stations).length){
      let allLis = Object.keys(this.props.stations).map(key => {
        let currStation = this.props.stations[key];
        return (
          <StationList currStation={currStation} key={currStation.abbr["#text"]} handleClick={this.handleClick(currStation.abbr["#text"])} isSelected={this.state.selectedStation}/>
        );
      });
      content = (
        <ul className='station-list'>
          {allLis}
        </ul>
      );
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

export default AllStations;
