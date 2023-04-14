import React from "react"

class FooterItem extends React.Component{
    render(){
        return(
            <div className="footer__item">
                <p className="item__title">{this.props.title}</p>
                <p className="item__text">{this.props.degrees}°</p>
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
                    <img src={this.props.path} className="item__img"></img>
                    <p className="item__text">{this.props.time}</p>
                </div>
            </div>
        )
    }
}
class Footer extends React.Component{
    render(){
        return (
            <footer className="footer">
                <p className="footer__title">Подробнее</p>
                <div className="footer__details">
                <div className="footer__items">
                    <FooterItem title='По ощущениям' degrees='2'/>
                    <FooterItem title='Влажность' degrees='73'/>
                    <FooterItem title='Видимость' degrees='10'/>
                    <FooterItem title='Давление' degrees='760,00'/>
                    <FooterItem title='Ветер' degrees='4'/>
                </div>
                <div className="footer__items footer__sunrise">
                    <FooterTime title='Восход' time='7:23' path='assets/img/icons/sun-up.svg'/>
                    <FooterTime title='Закат' time='18:42' path='assets/img/icons/sun-down.svg'/>
                </div>
                </div>
            </footer>
        )
    }
};

export default Footer