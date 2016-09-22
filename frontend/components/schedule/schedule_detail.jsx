import React from 'react';

class ScheduleDetail extends React.Component {

  render() {
    let content;
    let legs = this.props.route.leg;
    let multiple = legs.length > 1 ? true : false ;
    let msg;
    content = this.props.route.leg.map((indLeg, idx) => {
      if (multiple){
        msg = idx === (legs.length-1) ? "" : ", transfer to" ;
      }
      return (
        <li className='schedule-leg' key={indLeg['@attributes'].trainHeadStation + indLeg['@attributes'].origTimeMin + Date.now()}>
        <i className="material-icons train-icon">directions_railway</i> {indLeg['@attributes'].trainHeadStation}  <i className="material-icons access-time-icon">access_time</i> {indLeg['@attributes'].origTimeMin} {msg ? msg : ""}
        </li>
      );
    });
    return (
      <ul className='single-schedule'>
      {content}
      </ul>
    );
  }
}

export default ScheduleDetail;
