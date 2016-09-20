import React from "react";


const formatNumber = (num) =>( num < 10 ? '0' + num : num);

class WidgetClock extends React.Component {
  constructor(){
    super();
    let date = new Date();

    this.state = {date: (new Date())};
    this.state = { currentHours: this.state.date.getHours(),
      currentMin: this.state.date.getMinutes(), currentSeconds: this.state.date.getSeconds(), currentDate: this.state.date.toDateString()};
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
        <h1 className='clock-time'> Time:
        <p>{this.state.currentHours} : {this.state.currentMin} : {this.state.currentSeconds}</p>
        </h1>
        <h1 className='clock-date'> Date:
          <p>{this.state.currentDate}</p>
        </h1>
      </div>
    );
  }
}

export default WidgetClock;
