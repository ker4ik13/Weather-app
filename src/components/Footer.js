import React from "react"

class FooterItem extends React.Component{
    render(){
        return(
            <div className="footer__item">
                <p className="item__title">{this.props.title}</p>
                <p className="item__text">{this.props.data}{this.props.unit}</p>
            </div>
        )
    }
};

class FooterTime extends React.Component{
    render(){
        return(
            <div className="footer__item">
                <p className="item__title">{this.props.title}</p>
                <div className="item__wrapper">
                    <img src={this.props.path} className="item__img"/>
                    <p className="item__text">{this.props.time}</p>
                </div>
            </div>
        )
    }
}
class Footer extends React.Component{
    render(){
        return (
            <footer className="footer" onLoad={this.props.weather}>
                <p className="footer__title">Подробнее</p>
                <div className="footer__details">
                <div className="footer__items">
                    <FooterItem title='По ощущениям' data={this.props.feelsLike} unit = '°'/>
                    <FooterItem title='Влажность' data={this.props.humidity} unit = '%'/>
                    <FooterItem title='Видимость' data={this.props.visibility} unit = ' м'/>
                    <FooterItem title='Давление' data={this.props.pressure} unit = ' мм'/>
                    <FooterItem title='Ветер' data={this.props.windSpeed} unit = ' м/с'/>
                </div>
                <div className="footer__items footer__sunrise">
                    <FooterTime title='Восход' time={this.props.sunrise} path='assets/img/icons/sun-up.svg'/>
                    <FooterTime title='Закат' time={this.props.sunset} path='assets/img/icons/sun-down.svg'/>
                </div>
                </div>
            </footer>
        )
    }
};

export default Footer