import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const API_KEY2 = '9888183327cf4a16985171533231504'

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
    isDay: undefined,
    day2MaxTemp: undefined,
    day2MinTemp: undefined,
    day2Condition: undefined,
    day2Date: undefined,
    day3MaxTemp: undefined,
    day3MinTemp: undefined,
    day3Condition: undefined,
    day3Date: undefined,
    day4MaxTemp: undefined,
    day4MinTemp: undefined,
    day4Condition: undefined,
    day4Date: undefined,
    day5MaxTemp: undefined,
    day5MinTemp: undefined,
    day5Condition: undefined,
    day5Date: undefined,
    day6MaxTemp: undefined,
    day6MinTemp: undefined,
    day6Condition: undefined,
    day6Date: undefined,
    day7MaxTemp: undefined,
    day7MinTemp: undefined,
    day7Condition: undefined,
    day7Date: undefined,
    error: undefined,
    }

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    const api__url = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY2}&q=${city}&days=21&aqi=no&alerts=no`)
    const dataWeek = await api__url.json();

    this.setState({
      temp: Math.floor(dataWeek.current.temp_c),
      weatherDesc: dataWeek.current.condition.text,
      city: dataWeek.location.name,
      tempMax: Math.floor(dataWeek.forecast.forecastday[0].day.maxtemp_c),
      tempMin: Math.floor(dataWeek.forecast.forecastday[0].day.mintemp_c),
      feelsLike: Math.floor(dataWeek.current.feelslike_c),
      humidity: dataWeek.current.humidity,
      pressure: dataWeek.current.pressure_mb,
      sunrise: dataWeek.forecast.forecastday[0].astro.sunrise,
      sunset: dataWeek.forecast.forecastday[0].astro.sunset,
      visibility: dataWeek.current.vis_km,
      windSpeed: Math.floor(dataWeek.current.wind_kph),
      isDay: dataWeek.current.is_day,
      nowIcon: dataWeek.current.condition.icon,
      todayWeather: dataWeek.forecast.forecastday[0].day.condition.text,

      day2MaxTemp: Math.floor(dataWeek.forecast.forecastday[1].day.maxtemp_c),
      day2MinTemp: Math.floor(dataWeek.forecast.forecastday[1].day.mintemp_c),
      day2Condition: dataWeek.forecast.forecastday[1].day.condition.text,
      day2Date: dataWeek.forecast.forecastday[1].date.slice(5).replace('-', ' '),
      day3MaxTemp: Math.floor(dataWeek.forecast.forecastday[2].day.maxtemp_c),
      day3MinTemp: Math.floor(dataWeek.forecast.forecastday[2].day.mintemp_c),
      day3Condition: dataWeek.forecast.forecastday[2].day.condition.text,
      day3Date: dataWeek.forecast.forecastday[2].date.slice(5).replace('-', ' '),
      day4MaxTemp: Math.floor(dataWeek.forecast.forecastday[3].day.maxtemp_c),
      day4MinTemp: Math.floor(dataWeek.forecast.forecastday[3].day.mintemp_c),
      day4Condition: dataWeek.forecast.forecastday[3].day.condition.text,
      day4Date: dataWeek.forecast.forecastday[3].date.slice(5).replace('-', ' '),
      day5MaxTemp: Math.floor(dataWeek.forecast.forecastday[4].day.maxtemp_c),
      day5MinTemp: Math.floor(dataWeek.forecast.forecastday[4].day.mintemp_c),
      day5Condition: dataWeek.forecast.forecastday[4].day.condition.text,
      day5Date: dataWeek.forecast.forecastday[4].date.slice(5).replace('-', ' '),
      day6MaxTemp: Math.floor(dataWeek.forecast.forecastday[5].day.maxtemp_c),
      day6MinTemp: Math.floor(dataWeek.forecast.forecastday[5].day.mintemp_c),
      day6Condition: dataWeek.forecast.forecastday[5].day.condition.text,
      day6Date: dataWeek.forecast.forecastday[5].date.slice(5).replace('-', ' '),
      day7MaxTemp: Math.floor(dataWeek.forecast.forecastday[6].day.maxtemp_c),
      day7MinTemp: Math.floor(dataWeek.forecast.forecastday[6].day.mintemp_c),
      day7Condition: dataWeek.forecast.forecastday[6].day.condition.text,
      day7Date: dataWeek.forecast.forecastday[6].date.slice(5).replace('-', ' '),
      error: undefined,
    })
  }


  render(){
    return(
      <><Header weather = {this.gettingWeather}
      city = {this.state.city}
      temp = {this.state.temp}
      icon = {this.state.icon}
      error = {this.state.error}
      weatherDesc = {this.state.weatherDesc}/>

      <Main weather = {this.gettingWeather}
      tempMax = {this.state.tempMax}
      tempMin = {this.state.tempMin}
      todayWeather = {this.state.todayWeather}
      weatherDesc = {this.state.weatherDesc}
      day2MaxTemp = {this.state.day2MaxTemp}
      day2MinTemp = {this.state.day2MinTemp}
      day2Condition = {this.state.day2Condition}
      day2Date = {this.state.day2Date}
      day3MaxTemp = {this.state.day3MaxTemp}
      day3MinTemp = {this.state.day3MinTemp}
      day3Condition = {this.state.day3Condition}
      day3Date = {this.state.day3Date}
      day4MaxTemp = {this.state.day4MaxTemp}
      day4MinTemp = {this.state.day4MinTemp}
      day4Condition = {this.state.day4Condition}
      day4Date = {this.state.day4Date}
      day5MaxTemp = {this.state.day5MaxTemp}
      day5MinTemp = {this.state.day5MinTemp}
      day5Condition = {this.state.day5Condition}
      day5Date = {this.state.day5Date}
      day6MaxTemp = {this.state.day6MaxTemp}
      day6MinTemp = {this.state.day6MinTemp}
      day6Condition = {this.state.day6Condition}
      day6Date = {this.state.day6Date}
      day7MinTemp = {this.state.day7MinTemp}
      day7MaxTemp = {this.state.day7MaxTemp}
      day7Condition = {this.state.day7Condition}
      day7Date = {this.state.day7Date}/>
      
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