import React from 'react';

class AllStations extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestAllStations();
  }
  render() {
    let content;
    if (Object.keys(this.props.stations).length){
      let allLis = Object.keys(this.props.stations).map(key => {
        let currStation = this.props.stations[key];
        return (
          <li key={currStation.abbr["#text"]}>
            {currStation.name["#text"]}
          </li>
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
