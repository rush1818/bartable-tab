import React from 'react';

class RouteList extends React.Component {


  renderInfo({length, minutes, hexcolor, platform}){
    let content;
    let name = this.props.name;
    // debugger
    content = (
      <li key={`${name}${minutes['#text']}`}>
        <span><i className="material-icons train-icon">directions_railway</i> {name}, <i className="material-icons timer-icon">timer</i> {minutes['#text']}, Platform: {platform['#text']}, Cars: {length['#text']}</span>
      </li>
    );
    return content;
  }

  render() {
    let content;
    let currRoute = this.props.routes;
    if (this.props.routes instanceof Array){
      content = currRoute.map(route => {
        return this.renderInfo(route);
      });
    } else if (this.props.routes){
      content = this.renderInfo(this.props.routes);
    }
    return (
      <ul className='route-list-ul'>
      {content}
      </ul>
    );
  }
}

export default RouteList;
