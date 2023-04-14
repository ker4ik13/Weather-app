import React from "react";

class WeatherItem extends React.Component{
    sun = 'assets/img/icons/sun.svg'
    cloudy = 'assets/img/icons/sun.svg'
    rain = 'assets/img/icons/sun.svg'
    rainy = 'assets/img/icons/sun.svg'
    snowAndRain = 'assets/img/icons/sun.svg'
    snowflake = 'assets/img/icons/sun.svg'
    render(){
        return(
            <div className="weather__item weather__item--today">
                 <p className="weather__day">Сегодня</p>
                <img src={this.sun} className="weather__img"></img>
                <div className="weather__degrees">
                    <p className="weather__day-degrees">4°</p>
                    <p className="weather__night-degrees">3°</p>
                </div>
            </div>
        )
    }
};

class Main extends React.Component{
    render(){
        return (
            <main className="main">
                <p className="main__title">По дням</p>
                <div className="weather__items">
                    <WeatherItem/>
                    <WeatherItem/>
                    <WeatherItem/>
                    <WeatherItem/>
                    <WeatherItem/>
                    <WeatherItem/>
                    <WeatherItem/>
                </div>
            </main>
        )
    }
};

export default Main