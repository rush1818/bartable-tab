import React from "react";


const formatNumber = (num) =>( num < 10 ? '0' + num : num);

class WidgetClock extends React.Component {
  constructor(){
    super();
    let date = new Date();
    const newDate = new Date();
    let currentHours = formatNumber(newDate.getHours());
    let currentMin = formatNumber(newDate.getMinutes());
    let currentSeconds = formatNumber(newDate.getSeconds());

    this.state = {date: newDate, currentHours ,
      currentMin, currentSeconds, currentDate: newDate.toDateString()};
  }

  componentDidMount (){
    setInterval(this.updateTime.bind(this), 1000);
  }
  updateTime(){

    const newDate = new Date();
    let currentHours = formatNumber(newDate.getHours());
    let currentMin = formatNumber(newDate.getMinutes());
    let currentSeconds = formatNumber(newDate.getSeconds());

    this.setState({ date: newDate, currentHours ,
      currentMin , currentSeconds, currentDate: newDate.toDateString()});
  }

  render(){
    return (
      <div className='clock'>
        <p>{this.state.currentHours} : {this.state.currentMin} : {this.state.currentSeconds}</p>
        <p>{this.state.currentDate}</p>
      </div>
    );
  }
}

export default WidgetClock;
