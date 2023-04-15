import React from "react";

class WeatherItem extends React.Component{
    sun = 'assets/img/icons/sun.svg'
    cloudy = 'assets/img/icons/cloudy.svg'
    rain = 'assets/img/icons/rain.svg'
    rainy = 'assets/img/icons/rainy.svg'
    snowAndRain = 'assets/img/icons/snow-and-rain.svg'
    snowflake = 'assets/img/icons/snowflake.svg'
    render(){
        return(
            <div className={this.props.class}>
                <p className="weather__day">{this.props.day}</p>
                {this.props.weatherDesc == "пасмурно" &&
                    <img src={this.cloudy} className="weather__img"/>
                }{this.props.weatherDesc === 'солнечно' && 
                    <img src={this.sun} className="weather__img"/>
                }{this.props.weatherDesc === 'дождливо' && 
                    <img src={this.rainy} className="weather__img"/>
                }{this.props.weatherDesc === 'дождь' && 
                    <img src={this.rain} className="weather__img"/>
                }{this.props.weatherDesc === 'снег' && 
                    <img src={this.snowflake} className="weather__img"/>
                }
                <div className="weather__degrees">
                    <p className="weather__day-degrees">{this.props.tempMax}°</p>
                    <p className="weather__night-degrees">{this.props.tempMin}°</p>
                </div>
            </div>
        )
    }
};
// доделать
class Main extends React.Component{
    render(){
        return (
            <main className="main">
                <p className="main__title">По дням</p>
                <div className="weather__items" onLoad={this.props.weather}>
                    <WeatherItem class='weather__item weather__item--today' day='Сегодня' tempMax = {this.props.tempMax} tempMin = {this.props.tempMin} weatherDesc = {this.props.weatherDesc}/>
                    <WeatherItem class='weather__item' day = 'Завтра' tempMax = {this.props.tempMax} tempMin = {this.props.tempMin} weatherDesc = {this.props.weatherDesc}/>
                    <WeatherItem class='weather__item' day = 'Ср' tempMax = {this.props.tempMax} tempMin = {this.props.tempMin} weatherDesc = {this.props.weatherDesc}/>
                    <WeatherItem class='weather__item' day = 'Чт' tempMax = {this.props.tempMax} tempMin = {this.props.tempMin} weatherDesc = {this.props.weatherDesc}/>
                    <WeatherItem class='weather__item' day = 'Пт' tempMax = {this.props.tempMax} tempMin = {this.props.tempMin} weatherDesc = {this.props.weatherDesc}/>
                    <WeatherItem class='weather__item' day = 'Сб' tempMax = {this.props.tempMax} tempMin = {this.props.tempMin} weatherDesc = {this.props.weatherDesc}/>
                    <WeatherItem class='weather__item' day = 'Вс' tempMax = {this.props.tempMax} tempMin = {this.props.tempMin} weatherDesc = {this.props.weatherDesc}/>
                </div>
            </main>
        )
    }
};

export default Main