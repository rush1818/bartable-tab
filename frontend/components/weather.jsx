import React from 'react';


class Weather extends React.Component {
  constructor(){
    super();
    this.state = {temperatureK: null, city: "Location not provided", latitude: 0, longitude: 0, unitsF: true, temperatureF: 'loading', temperatureC: 'loading'};

    this._fetchGeoLocation = this._fetchGeoLocation.bind(this);
    this.saveWeather = this.saveWeather.bind(this);
    this._updateLocation = this._updateLocation.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  getWeather(){
    const self = this;
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

              setTimeout(()=>{
                self.saveWeather();
              }, 2000)
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

  saveWeather(){
    chrome.storage.sync.set({'weatherInfo': {temperatureK: this.state.temperatureK, city: this.state.city,  latitude: this.state.latitude, longitude: this.state.longitude, unitsF: this.state.unitsF, temperatureF: this.state.temperatureF, temperatureC: this.state.temperatureC } }, function() {
      // Notify that we saved.
      console.log('Settings saved');
    });
  }

  getStorageWeather(callback){
    const that = this;
    let option = false;
    chrome.storage.sync.get('weatherInfo', ({weatherInfo}) => {
      if (weatherInfo && weatherInfo.temperatureF && weatherInfo.temperatureC){
        option = true;
        that.setState({temperatureK: weatherInfo.temperatureK, temperatureF: weatherInfo.temperatureF, city: weatherInfo.city, temperatureC: weatherInfo.temperatureC, unitsF: weatherInfo.unitsF});
      } else {
        console.log('not found');
      }
      callback(option);
    });
  }

  _fetchGeoLocation(){
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
      // console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success.bind(this), error, options);
  }
  componentDidMount () {
    const that = this;
    this.getStorageWeather((option) => {
      return option ? that._updateLocation() : that._fetchGeoLocation() ;
    });
    // this._fetchGeoLocation();
  }

  _updateLocation(){
    const that = this;
    this.updateInterval = setTimeout(() => {
      that._fetchGeoLocation();
      that._updateLocation();
    }, 60000);
  }

  handleClick(e){
    const that = this;
    e.preventDefault();
    if (that.state.unitsF) {
      that.setState({unitsF: false});
    } else {
      that.setState({unitsF: true});
    }
    setTimeout(()=> {
      that.saveWeather();
    }, 100);
  }
  componentWillUnmount(){

  }

  kToF(kel){
    return (Math.round((kel* 9/5 - 459.67) * 100) / 100);
  }

  kToC(kel){
    return (Math.round((kel- 273.15) * 100)/100 );
  }

  render (){
    let temp, city;
    if (this.state.temperatureK){
      if (this.state.unitsF){
        temp = (<p onClick={this.handleClick}>Temperature in F: {this.state.temperatureF}
          </p>);
      } else {
        temp = (<p onClick={this.handleClick}>Temperature in C: {this.state.temperatureC}
          </p>);
      }
      city = (<p>City: {this.state.city}
        </p>);
    } else {
      temp = "Loading";
      city = 'Loading';
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
