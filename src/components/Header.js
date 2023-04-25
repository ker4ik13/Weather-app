import React from "react";
import { weatherForm } from "../utils/weatherForm";

class Header extends React.Component{
    render(){
        return (
        <header className="header">
            <form className="weather__form" onSubmit={this.props.weather}>
                <input type="text" name="city" placeholder="Введите город" className="weather__input" onChange={weatherForm}/>
                <button className="weather__submit invisible"></button>
            </form>
            <div className="header__item">
                <p className="header__city">{this.props.city}</p>
                <main className="header__main">
                    
                    {this.props.weatherDesc == 'Light drizzle' &&
                        <img src="assets/img/icons/rainy.svg" className="header__img"/>
                    }{this.props.weatherDesc === 'Moderate rain' &&
                        <img src="assets/img/icons/rainy.svg" className="header__img"/>
                    }{this.props.weatherDesc === 'Rain' &&
                        <img src="assets/img/icons/rain.svg" className="header__img"/>
                    }{this.props.weatherDesc === 'Heavy rain' &&
                        <img src="assets/img/icons/rain.svg" className="header__img"/>
                    }{this.props.weatherDesc === 'Sunny' &&
                        <img src="assets/img/icons/sun.svg" className="header__img"/>
                    }{this.props.weatherDesc === 'Cloudy' &&
                        <img src="assets/img/icons/cloudy.svg" className="header__img"/>
                    }{this.props.weatherDesc === 'snow' &&
                        <img src="assets/img/icons/snowflake.svg" className="header__img"/>
                    }{this.props.weatherDesc === 'snow and rain' &&
                        <img src="assets/img/icons/snow-and-rain.svg" className="header__img"/>
                    }{this.props.weatherDesc === 'Clear' &&
                        <img src="assets/img/icons/sun.svg" className="header__img"/>
                    }{this.props.weatherDesc === 'Partly cloudy' &&
                        <img src="assets/img/icons/cloudy.svg" className="header__img"/>
                    }{this.props.weatherDesc === 'Mist' &&
                        <img src="assets/img/icons/mist.png" className="header__img"/>
                    }{this.props.weatherDesc === 'Overcast' &&
                        <img src="assets/img/icons/cloudy.svg" className="header__img"/>
                    }
                    {this.props.weatherDesc === 'Light rain' &&
                        <img src="assets/img/icons/rainy.svg" className="header__img"/>
                    }

                    {this.props.city &&
                        <p className="header__degrees">{this.props.temp}°</p>
                    }
                </main>
                <p className="header__weather">{this.props.weatherDesc}</p>
            </div>
        </header>
        )
    }
};

export default Header