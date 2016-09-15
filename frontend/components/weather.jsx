import React from 'react';


class Weather extends React.Component {
  constructor(){
    super();
    this.state = {temperatureK: null, city: "Location not provided", latitude: 0, longitude: 0, units: 'F', temperatureF: 'loading', temperatureC: 'loading'};
  }

  getWeather(){
    let self = this;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
              let response = JSON.parse(xmlhttp.responseText);
              let kel = response.main.temp;
              self.setState({temperatureK: kel ,
                city: response.name,
                temperatureF: self.kToF(kel),
                temperatureC: self.kToC(kel)});
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };
    xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=645c5d39c7603f17e23fcaffcea1a3c1`, true);
    xmlhttp.send();
  }

  componentDidMount () {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = (pos) => {
      var crd = pos.coords;
      this.setState({latitude: crd.latitude});
      this.setState({longitude: crd.longitude});
      this.getWeather();
    };

    const error = (err) => {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success.bind(this), error, options);
  }

  kToF(kel){
    return (kel* 9/5 - 459.67);
  }

  kToC(kel){
    return (kel- 273.15);
  }

  render (){
    let temp, city;
    if (this.state.temperatureK){
      if (this.state.units === 'F'){
        temp = (<p>Temperature in F: {this.state.temperatureF}
          </p>);
      } else {
        temp = (<p>Temperature in C: {this.state.temperatureC}
          </p>);
      }
      city = (<p>City: {this.state.city}
        </p>);
    } else {
      temp = "Loading";
      city = 'Loading'
    }
    return (

      <div>
        <h1>Weather</h1>
        {temp}
        {city === 'Loading' ? "" : city}
      </div>
    );
  }
}

export default Weather;
