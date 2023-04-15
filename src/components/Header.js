import React from "react";


const API_KEY = '109440449518b43abeb4e646cc838d3f';

class Header extends React.Component{
    render(){
        return (
        <header className="header" onLoad={this.props.weather}>
            <p className="header__city">{this.props.city}</p>
            <main className="header__main">
                
                {this.props.weatherDesc == 'пасмурно' &&
                    <img src="assets/img/icons/cloudy.svg" className="header__img"/>
                }{this.props.weatherDesc === 'солнечно' &&
                    <img src="assets/img/icons/sun.svg" className="header__img"/>
                }{this.props.weatherDesc === 'дождливо' &&
                    <img src="assets/img/icons/rainy.svg" className="header__img"/>
                }{this.props.weatherDesc === 'дождь' &&
                    <img src="assets/img/icons/rain.svg" className="header__img"/>
                }{this.props.weatherDesc === 'снег' &&
                    <img src="assets/img/icons/snowflake.svg" className="header__img"/>
                }
                <p className="header__degrees">{this.props.temp}°</p>
            </main>
            <p className="header__weather">{this.props.weatherDesc}</p>
        </header>
        )
    }
};

export default Header