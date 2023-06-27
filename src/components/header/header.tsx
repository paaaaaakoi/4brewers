import React, { useState } from 'react';
import './header.scss';

const Header = () => {
	const [menuShown, setMenuShown] = useState(false);

	return  (
		<header className='header'>
			<div className='container'>
				<div className='inner-p'>
					<div className='header-desk'>
						<a href={'/'}>
							<img className='logo' src={require('../../images/logo.svg').default} alt={'4-BREWERS'} />
							{/* <img className='logo-mob' src={require('../../images/logo-mob.svg').default} alt={'4-BREWERS'} /> */}
						</a>
						<nav className='nav'>
							<ul>
								<li><h4><a href='/sorts'>Сорта</a></h4></li>
								<li><h4><a href='/about'>О компании</a></h4></li>
								<li><h4><a href='/contacts'>Контакты</a></h4></li>
								<li><h4><a href='/team'>Команда</a></h4></li>
								{/* eslint-disable-next-line react/jsx-no-target-blank */}
								<li><h4><a target='_blank' href='http://shop.4brewers.ru/'>Магазин B2B</a></h4></li>
							</ul>
						</nav>
					</div>

					<div className='header-mob'>
						<img className='logo' src={require('../../images/logo-mob.svg').default} alt={'4-BREWERS'} onClick={() => setMenuShown(true)}/>
						<nav className={`nav ${menuShown && 'nav-shown'}`}>
							<img className='logo-1' src={require('../../images/logo-mob-1.svg').default} alt={'4-BREWERS'} onClick={() => setMenuShown(false)} />
							<ul>
								<li><h4><a href='/'>Главная</a></h4></li>
								<li><h4><a href='/sorts'>Сорта</a></h4></li>
								<li><h4><a href='/about'>О компании</a></h4></li>
								<li><h4><a href='/contacts'>Контакты</a></h4></li>
								<li><h4><a href='/team'>Команда</a></h4></li>
								{/* eslint-disable-next-line react/jsx-no-target-blank */}
								<li><h4><a target='_blank' href='http://shop.4brewers.ru/'>Магазин B2B</a></h4></li>
							</ul>
						</nav>
					</div>
					{true && <div className={`hover ${menuShown && 'nav-shown'}`} onClick={() => setMenuShown(false)}/>}
				</div>
			</div>
		</header>
	)
};

export default Header;
