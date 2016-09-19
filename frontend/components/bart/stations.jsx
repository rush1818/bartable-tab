import React from 'react';
import Select from 'react-select';

class AllStations extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    let content;
    if (Object.keys(this.props.stations).length){
      content = (
        <Select name='stations' placeholder={this.props.type} value={this.props.selectedStation} options={this.props.options} onChange={this.props.handleChange}/>
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
