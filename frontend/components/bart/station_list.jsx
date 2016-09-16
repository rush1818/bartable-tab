import React from 'react';

class StationList extends React.Component {
  render() {
    let currStation = this.props.currStation;
    return (
      <li key={currStation.abbr["#text"]}>
      {currStation.name["#text"]}
      </li>
    );
  }
}

export default StationList;
