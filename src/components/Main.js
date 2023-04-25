import React from "react";
// import { checkDay } from "../utils/checkDay";

class WeatherItem extends React.Component{
    sun = 'assets/img/icons/sun.svg'
    cloudy = 'assets/img/icons/cloudy.svg'
    rain = 'assets/img/icons/rain.svg'
    rainy = 'assets/img/icons/rainy.svg'
    snowAndRain = 'assets/img/icons/snow-and-rain.svg'
    snowflake = 'assets/img/icons/snowflake.svg'
    mist = 'assets/img/icons/mist.png'
    render(){
        return(
            <div className={this.props.class} id={this.props.id}>
                <p className="weather__day">{this.props.day}</p>
                {this.props.weatherDesc == "Heavy rain" &&
                    <img src={this.rain} className="weather__img"/>
                }{this.props.weatherDesc == "облачно с прояснениями" &&
                    <img src={this.cloudy} className="weather__img"/>
                }{this.props.weatherDesc === 'солнечно' && 
                    <img src={this.sun} className="weather__img"/>
                }{this.props.weatherDesc === 'дождливо' && 
                    <img src={this.rainy} className="weather__img"/>
                }{this.props.weatherDesc === 'дождь' && 
                    <img src={this.rain} className="weather__img"/>
                }{this.props.weatherDesc === 'снег' && 
                    <img src={this.snowflake} className="weather__img"/>
                }{this.props.weatherDesc === 'Partly cloudy' && 
                    <img src={this.cloudy} className="weather__img"/>
                }{this.props.weatherDesc == "Overcast" &&
                    <img src={this.cloudy} className="weather__img"/>
                }{this.props.weatherDesc === 'Patchy rain possible' && 
                    <img src={this.rainy} className="weather__img"/>
                }{this.props.weatherDesc === 'Sunny' && 
                    <img src={this.sun} className="weather__img"/>
                }{this.props.weatherDesc === 'Moderate rain' && 
                    <img src={this.rain} className="weather__img"/>
                }{this.props.weatherDesc === 'Snow' && 
                    <img src={this.snowflake} className="weather__img"/>
                }{this.props.weatherDesc === 'Mist' && 
                    <img src={this.mist} className="weather__img"/>
                }
                <div className="weather__degrees">
                    <p className="weather__day-degrees">{this.props.tempMax}°</p>
                    <p className="weather__night-degrees">{this.props.tempMin}°</p>
                </div>
            </div>
        )
    }
};
class Main extends React.Component{
    render(){
        if(this.props.city){
            return (
                <main className="main">
                    <p className="main__title">По дням</p>
                    <div className="weather__items" onSubmit={this.props.weather}>
                        <WeatherItem class='weather__item weather__item--today' day='Сегодня' tempMax = {this.props.tempMax} tempMin = {this.props.tempMin} weatherDesc = {this.props.todayWeather} id = {0}/>
                        <WeatherItem class='weather__item' day = 'Завтра' tempMax = {this.props.day2MaxTemp} tempMin = {this.props.day2MinTemp} weatherDesc = {this.props.day2Condition} id = {1}/>
                        <WeatherItem class='weather__item' day = {this.props.day3Date} tempMax = {this.props.day3MaxTemp} tempMin = {this.props.day3MinTemp} weatherDesc = {this.props.day3Condition} id = {2}/>
                        <WeatherItem class='weather__item' day = {this.props.day4Date} tempMax = {this.props.day4MaxTemp} tempMin = {this.props.day4MinTemp} weatherDesc = {this.props.day4Condition} id = {3}/>
                        <WeatherItem class='weather__item' day = {this.props.day5Date} tempMax = {this.props.day5MaxTemp} tempMin = {this.props.day5MinTemp} weatherDesc = {this.props.day5Condition} id = {4}/>
                        <WeatherItem class='weather__item' day = {this.props.day6Date} tempMax = {this.props.day6MaxTemp} tempMin = {this.props.day6MinTemp} weatherDesc = {this.props.day6Condition} id = {5}/>
                        <WeatherItem class='weather__item' day = {this.props.day7Date} tempMax = {this.props.day7MaxTemp} tempMin = {this.props.day7MinTemp} weatherDesc = {this.props.day7Condition} id = {6}/>
                    </div>
                </main>
            )
        }
    }
};

export default Main