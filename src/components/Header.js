import React from "react";

class Header extends React.Component{
    degrees = 4
    render(){
        return (
        <header className="header">
            <p className="header__city">Москва</p>
            <main className="header__main">
                <img src="assets/img/icons/sun.svg" className="header__img"></img>
                <p className="header__degrees">{this.degrees}°</p>
            </main>
            <p className="header__weather">Солнечно</p>
        </header>
        )
    }
};

export default Header