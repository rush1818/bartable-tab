import React from 'react';

class StationList extends React.Component {
  render() {
    let currStation = this.props.currStation;
    return (
      <li key={currStation.abbr["#text"]} onClick={this.props.handleClick} className={this.props.isSelected === currStation.abbr["#text"] ? 'selected-station' : ""}>
      {currStation.name["#text"]}
      </li>
    );
  }
}

export default StationList;
