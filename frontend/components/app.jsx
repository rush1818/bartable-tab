import React from 'react';
import Weather from './weather.jsx';
import StationFormContainer from './bart/stations_form_container.jsx';
import RealTimeDropDownContainer from './routes/dropdown_container.jsx';
import SavedScheduleContainer from './saved_routes/saved_routes_container.jsx';
import Clock from './clock.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
      <h1><Clock /></h1>
      <h1><Weather /></h1>
      <h2><StationFormContainer /></h2>
      <h2><RealTimeDropDownContainer /></h2>
      <div><SavedScheduleContainer /></div>
      </div>
    );
  }
}

export default App;
