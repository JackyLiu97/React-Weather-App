import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = '' 


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: [{
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined, 
      }]
      /*
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      */
    }
  this.getWeather = this.getWeather.bind(this)
  this.handleLocalStorage = this.getWeather.bind(this)
  }

  /*
  handleLocalStorage(weatherInfo,key) {
    const cachedInfo = localStorage.getItem(key)
    if (cachedInfo) {
      this.setState(JSON.parse(cachedInfo))
    }
    else {
      localStorage.setItem(key, JSON.stringify(weatherInfo))
      this.setState(weatherInfo)
      }
    }
    */ 
  getWeather(e) {
    e.preventDefault();
    const city = e.target.city.value
    const country = e.target.country.value
   // const key = `${city}${country}`.toLowerCase()
    if (city && country) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const weatherInfo = {
        temperature: data.main.temp,
        city: data.sys.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      }
      this.setState({ weather: weatherInfo})
    })
    .catch((err)=> {
    console.log('Error failed to get data', err)
    this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a City and Country",
      })
    })
    }
  }

  /*
  componentDidMount = () => {
    const json = localStorage.getItem(this.state.weather.city)
    const weather = JSON.parse(json);
    this.setState({ weather })
  }

  componentDidUpdate = () => {
    const weatherInfo = JSON.stringify(this.state.weather)
    localStorage.setItem(this.state.weather.city, weatherInfo)
    
  }
*/

  render() {
    return (
      <div>
      `<Title/>
        <Form getWeather={this.getWeather}
        weather={this.state.weather}
        />
        <Weather 
          temperature={this.state.weather.temperature}
          city={this.state.weather.city}
          country={this.state.weather.country}
          humidity={this.state.weather.humidity}
          description={this.state.weather.description}
          error={this.state.weather.error}
          />
    </div>
    );
  }
}


export default App;
