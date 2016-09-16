import React from 'react';
import StationList from './station_list.jsx';

class AllStations extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestAllStations();
    // this.props.requestAllStationsStorage()
  }
  render() {
    let content;
    if (Object.keys(this.props.stations).length){
      let allLis = Object.keys(this.props.stations).map(key => {
        let currStation = this.props.stations[key];
        return (
          <StationList currStation={currStation} key={currStation.abbr["#text"]}/>
        );
      });
      content = (
        <ul>
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
