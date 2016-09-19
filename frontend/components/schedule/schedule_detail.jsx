import React from 'react';

class ScheduleDetail extends React.Component {

  render() {
    let content;
    content = this.props.route.leg.map(indLeg => {
      return (
        <li className='schedule-leg' key={indLeg['@attributes'].trainHeadStation + indLeg['@attributes'].origTimeMin + Date.now()}>
        Train: {indLeg['@attributes'].trainHeadStation}  Departs: {indLeg['@attributes'].origTimeMin}
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
