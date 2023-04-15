import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const API_KEY = '109440449518b43abeb4e646cc838d3f';
const API_KEY2 = 'c61bf831517deb8cf9ef21519e1294cd'

class App extends React.Component{
  state = {
    temp: undefined,
    weatherDesc: undefined,
    feelsLike: undefined,
    humidity: undefined,
    pressure: undefined,
    tempMax: undefined,
    tempMin: undefined,
    city: undefined,
    sunrise: undefined,
    sunset: undefined,
    visibility: undefined,
    windSpeed: undefined,
    error: undefined,
    }

  gettingWeather = async () => {
    const api_url_today = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${API_KEY}&units=metric&lang=ru`);
    const data = await api_url_today.json();

    // Запрос на 7 дней (не работает)

    // const api_url_week = await fetch (`api.openweathermap.org/data/2.5/forecast/daily?q=Moscow&cnt=7&appid=${API_KEY2}&units=metric&lang=ru`)
    // const weekData = await api_url_week.json();
    // console.log(weekData);

    let sunset = data.sys.sunset;
    let dateSunset = new Date();
    dateSunset.setTime(sunset);
    let sunsetDate = dateSunset.getHours() + ':' + dateSunset.getMinutes();

    let sunrise = data.sys.sunrise;
    let dateSunrise = new Date();
    dateSunrise.setTime(sunrise);
    let sunriseDate = dateSunrise.getHours() + ':' + dateSunrise.getMinutes();

    this.setState({
      temp: Math.floor(data.main.temp),
      weatherDescs: data.weather[0].description,
      city: data.name,
      tempMax: Math.floor(data.main.temp_max),
      tempMin: Math.floor(data.main.temp_min),
      feelsLike: Math.floor(data.main.feels_like),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      sunrise: sunriseDate,
      sunset: sunsetDate,
      visibility: data.visibility,
      windSpeed: Math.floor(data.wind.speed),
      error: undefined,
    })
  }


  render(){
    return(
      <><Header weather = {this.gettingWeather}
      city = {this.state.city}
      temp = {this.state.temp}
      weatherDesc = {this.state.weatherDesc}/>

      <Main weather = {this.gettingWeather}
      tempMax = {this.state.tempMax}
      tempMin = {this.state.tempMin}
      weatherDesc = {this.state.weatherDesc}/>
      
      <Footer weather = {this.gettingWeather}
      feelsLike = {this.state.feelsLike}
      humidity = {this.state.humidity}
      pressure = {this.state.pressure}
      sunrise = {this.state.sunrise}
      sunset = {this.state.sunset}
      visibility = {this.state.visibility}
      windSpeed = {this.state.windSpeed}/></>
    )
  }
};


export default App