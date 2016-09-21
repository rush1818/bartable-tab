import React from 'react';
import RouteList from './route_list.jsx';

class StationInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {abbr: null};
    // this.abbr = null;
    this._startTimeOuts = this._startTimeOuts.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (this.state.abbr !== newProps.abbr){
      const that = this;
      if (that.updateTimeout) clearTimeout(that.updateTimeout);

      if (newProps.abbr){
        this.props.requestRTDForStation(newProps.abbr);
        this.setState({abbr: newProps.abbr});
        this._startTimeOuts();
      } else if (newProps.abbr === null){
        this.setState({abbr: null});
      }


    }
  }

  componentWillUnmount(){
    console.log('unmount');
    const that = this;
    if (that.updateTimeout) clearTimeout(that.updateTimeout);
  }

  _startTimeOuts(){
    const that = this;
    this.updateTimeout = setTimeout(()=>{
      that.props.requestRTDForStation(that.abbr);
      that._startTimeOuts();
    }, 10000);
  }

  render() {
    let content = "Info";
    let allInfo = this.props.realTime;
    let keys = Object.keys(allInfo);
    if (keys.length && this.state.abbr){
      content = keys.map(key => {
        return (<RouteList routes={allInfo[key]} name={key} key={key}/>);
      });
    } else {
      content = "";
    }
    return (
      <div>
      {content}
      </div>
    );
  }
}

export default StationInfo;
