import React from 'react';
import Weather from './weather.jsx';
import StationFormContainer from './bart/stations_form_container.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
      <h1><Weather /></h1>
      <h2><StationFormContainer /></h2>
      </div>
    );
  }
}

export default App;
