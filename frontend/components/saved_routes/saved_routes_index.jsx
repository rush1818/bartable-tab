import React from 'react';
import ScheduleContainer from '../schedule/schedule_container.jsx';

class SavedRoutesIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestScheduleStorage();
  }

  render() {
    let content;
    let keys = Object.keys(this.props.savedSchedule);
    if (keys){
      content = keys.map(key => {
        let orig = this.props.savedSchedule[key].orig;
        let dest = this.props.savedSchedule[key].dest;
        return <ScheduleContainer orig={orig} dest={dest} key={key + orig + dest}/>;
      });
    }

    return(
      <div className='saved-schedules-box'>
      {content}
      </div>
    );
  }
}

export default SavedRoutesIndex;
