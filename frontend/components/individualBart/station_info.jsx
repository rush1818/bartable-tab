import React from 'react';

class StationInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {abbr: null};
  }

  componentWillReceiveProps(newProps){
    if (this.state.abbr !== newProps.abbr){
      this.props.requestRTDForStation(newProps.abbr);
      this.setState({abbr: newProps.abbr});
    }
  }


  render() {
    return (
      <div>
      Station info
      </div>
    );
  }
}

export default StationInfo;
