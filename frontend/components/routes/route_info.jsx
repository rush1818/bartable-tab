import React from 'react';
import RouteList from './route_list.jsx';

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
    let content = "Info";
    let allInfo = this.props.realTime;
    let keys = Object.keys(allInfo);
    if (keys.length){
      content = keys.map(key => {
        return (<RouteList routes={allInfo[key]} name={key} key={key}/>);
      });
    }
    return (
      <div>
      {content}
      </div>
    );
  }
}

export default StationInfo;
