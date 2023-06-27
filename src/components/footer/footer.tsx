/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './footer.scss';

const Footer = () => (
	<footer className='container pb-5' style={{paddingBottom: 50}}>
        <div className='footer inner-p desc'>
            <div className='footer-col footer-contacts'>
                <img className="footer-logo" src={require('../../images/logo.svg').default} alt="4-BREWERS"/>
                <div>
                    <p>+7 499 444-07-34</p>
                    <p>mail@4brewers.ru</p>
                </div>
                <p>ООО "Четыре пивовара", 600014<br/>г. Владимир, ул. Пос.РТС, д.36к2</p>
                <a href='/#'>Политика конфиденциальности</a>
            </div>

            <div className='footer-col'>
                <h4 className='footer-col-title'>Пивоварня</h4>
                <a href="/about">О пивоварне</a>
                <a href="/team">Сотрудники</a>
            </div>

            <div className='footer-col'>
                <h4 className='footer-col-title'>Пиво</h4>
                <a href="/sorts">Каталог</a>
                <a href="/contacts">Где купить</a>
            </div>

            <div className='footer-col'>
                <h4 className='footer-col-title'>Мы в социальных сетях</h4>
                <div className="social-medias">
                    <a href={'https://untappd.com/4brewers'} target='_blank'>
                        <img src={require('../../images/icons/social-medias/untappd.svg').default} alt=''/>
                    </a>
                    <a href={'https://vk.com/4brewers'} target='_blank'>
                        <img src={require('../../images/icons/social-medias/vk.svg').default} alt=''/>
                    </a>
                    <a href={'https://www.facebook.com/4brewers.ru'} target='_blank'>
                        <img src={require('../../images/icons/social-medias/facebook.svg').default} alt=''/>
                    </a>
                    <a href={'https://www.instagram.com/4brewers.ru/'} target='_blank'>
                        <img src={require('../../images/icons/social-medias/instagram.svg').default} alt=''/>
                    </a>
                </div>
            </div>
        </div>
	</footer>
);

export default Footer;