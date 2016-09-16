import React from 'react';
import Weather from './weather.jsx';
import StationsContainer from './bart/stations_container.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
      <h1><Weather /></h1>
      <h2><StationsContainer /></h2>
      </div>
    );
  }
}

export default App;
