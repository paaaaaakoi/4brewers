/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import './about.scss';



const About = () => {
    return (
        <div className="about">

            <img className="img-beer" src={require('../../images/beer-spill.svg').default} alt=''/>
            <img className="img-beer-mob" src={require('../../images/beer-spill-mob.svg').default} alt=''/>

            <section className="container">
                <div className="facts inner-p">
                    <h2 className="h1 container-title">Основные факты</h2>
                    <div className="facts-content">
                        <div className="facts-content__list">
                            <div className="list-item">
                                <img className="list-item__num" src={require('../../images/years/2010.png')} alt='2010'/>
                                <p className="list-item__text">Начало нашего пути. Домашнаяя пивоварня</p>
                            </div>

                            <div className="list-item">
                                <img className="list-item__num" src={require('../../images/years/2014.png')} alt='2014'/>
                                <p className="list-item__text">Открытие паба во Владимире</p>
                            </div>

                            <div className="list-item">
                                <img className="list-item__num" src={require('../../images/years/2016.png')} alt='2016'/>
                                <p className="list-item__text">Запуск полноценной пивоварни 4BREWERS</p>
                            </div>
                        </div>
                    </div>

                </div>


            </section>

            <section className="container">
                <div className="founders inner-p">


                        <div className="founders__content">
                            <div className="quote desc">
                                <img className="quote__char" src={require('../../images/quote.svg').default} alt=''/>
                                <p className="quote__text">Наша миссия - знакомить людей с миром пива, с разными стилями, вкусами и ароматами</p>
                            </div>
                            <h2 className="h1 container-title">Основатели пивоварни</h2>
                            <div className="h2">
                                <p>Игорь Максимов</p>
                                <p>Сергей Глинкин</p>
                                <p>Евгений Истомин</p>
                                <p>Роксана</p>
                            </div>
                        </div>

                        <img className="founders__photo" src={require('../../images/founders.png')} alt=''/>
                </div>
            </section>

            <section className="container">
                <div className="history inner-p">

                        <div className="history__video">
                            <iframe title="О нас" src="https://www.youtube.com/embed/j44-Xk4IGnQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                            </iframe>
                        </div>

                        <div className="history__content">
                            <div className="content-block">
                                <h3 className="h2">Подробная история создания и развития пивоварни</h3>
                                <a  target="_blank" href='https://vc.ru/food/223825-kak-varit-pivo-doma-otkryt-pab-postroit-kommercheskuyu-pivovarnyu-i-rasshirit-ee-v-5-raz-istoriya-4brewers-chast-1'>статья на vc.ru -&gt;</a>
                            </div>

                            <div className="content-block">
                                <h3 className="h2">Ещё немного про нас</h3>
                                <a  target="_blank" href='https://pro.rbc.ru/demo/60585aca9a794754ab5a0c1c'>статья на РБК -&gt;</a>
                                <a  target="_blank" href='https://music.yandex.ru/album/12694703/track/82375629'>подкаст “два пива, пожалуйста!” -&gt;</a>
                            </div>

                            <p>О том, что происходит с нами в настоящий момент, всегда можно узнать из соцсетей. Ссылки на них ниже.</p>
                        </div>

                </div>
            </section>

            <img className='bg-beer' src={require('../../images/bg-beer.svg').default} alt=''/>

        </div>
    )
}

export default About;
