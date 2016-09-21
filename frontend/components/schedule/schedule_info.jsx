import React from 'react';
import ScheduleDetail from './schedule_detail.jsx';
import {merge} from 'lodash';

let firstUpdate = true;
let timeOutTime;
class ScheduleInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.hidden ? {hidden: false} : {hidden: true};  //reverse logic
    this.updateSchedule = this.updateSchedule.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.updateSchedule(firstUpdate);
  }
  updateSchedule(){
    timeOutTime = timeOutTime && timeOutTime !== 2000 ? 4000 : 2000;

    const that = this;
    window.setTimeout(()=> {
      that.props.requestSchedule();
      that.updateSchedule();
    }, timeOutTime);
  }

  handleShow(e){
    e.preventDefault();
    this.state.hidden ? this.setState({hidden: false}) : this.setState({hidden: true});
  }

  handleDelete(e){
    e.preventDefault();
    this.props.removeSavedSchedule(this.props.orig, this.props.dest);
  }

  render() {
    let content;
    if (!this.state.hidden && this.props.schedule && this.props.schedule[this.props.orig] && this.props.schedule[this.props.orig][this.props.dest]){
      const routes = this.props.schedule[this.props.orig][this.props.dest];
      content = Object.keys(routes).map(id => {
        return (

          <ScheduleDetail route={routes[id]} key={Date.now() + id} className='saved-time-results' />
        );
      });
    }
    let mainTitle;
    if (this.props.deletable){
      mainTitle = (<span className='saved-from-to' key={Date.now() + this.props.orig} onClick={this.handleShow} >From: {this.props.orig} To: {this.props.dest} <i className="material-icons delete-icon" onClick={this.handleDelete}>clear</i>
      </span>);
    } else {
      mainTitle = (<span className='saved-from-to' key={Date.now() + this.props.orig} onClick={this.handleShow} >From: {this.props.orig} To: {this.props.dest}
      </span>);
    }
    return(
      <ul className='all-schedules' key={Date.now()}>
      {mainTitle}
      {content}
      </ul>
    );
  }
}

export default ScheduleInfo;
