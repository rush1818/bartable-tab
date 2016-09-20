import React from 'react';
import Weather from './weather.jsx';
import StationFormContainer from './bart/stations_form_container.jsx';
import RealTimeDropDownContainer from './routes/dropdown_container.jsx';
import SavedScheduleContainer from './saved_routes/saved_routes_container.jsx';
import Clock from './clock.jsx';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
      <div className='top-grid'>
        <StationFormContainer />
        <div className='clock-weather'>
          <Clock />
          <Weather />
        </div>
        <RealTimeDropDownContainer />
      </div>
      <SavedScheduleContainer />
      </div>
    );
  }
}

export default App;
