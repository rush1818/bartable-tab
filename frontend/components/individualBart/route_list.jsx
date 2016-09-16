import React from 'react';

class RouteList extends React.Component {


  renderInfo({length, minutes, hexcolor, platform}){
    let content;
    let name = this.props.name;
    // debugger
    content = (
      <li key={`${name}${minutes['#text']}`}>
        <span>Name: {name}, Time: {minutes['#text']}, Platform: {platform['#text']}, Length: {length['#text']}</span>
      </li>
    );
    return content;
  }
  
  render() {
    let content;
    let currRoute = this.props.routes;
    content = currRoute.map(route => {
      return this.renderInfo(route);
    });
    return (
      <ul>
      {content}
      </ul>
    );
  }
}

export default RouteList;
