import React from "react";
import SliderSection from '../../components/sections/slider-section/slider-section';
import Job from '../../components/sections/job-section/job-section';
import './main.scss';

const Main = () => {
    return (
        <div className="main">
            
            <SliderSection />

            <section className="container description">
                <h2 className="container-title h1">Четыре Пивовара - это...</h2>
                <p className="description-text-mid">...сообщество, основанное на большой дружбе маленьких людей и еще меньших дрожжей</p>
                <div className="description-images">
                    <div className="img">
                        <img alt='' src={require('../../images/desc/1.png')}/>
                    </div>
                    <div className="img">
                        <img alt='' src={require('../../images/desc/2.png')}/>
                    </div>
                    <div className="img">
                        <img alt='' src={require('../../images/desc/3.png')}/>
                    </div>
                    <div className="img">
                        <img alt='' src={require('../../images/desc/4.png')}/>
                    </div>
                </div>
                <div className="description-text">
                    <p>это различные сорта пива, которые можно попробовать в нашем баре в самом центре Владимира</p>
                    <a className="btn btn-prim" href="/about">подробнее о нас</a>
                </div>
            </section>

            <section className="container beer-box">
                <h2 className="container-title h1">Ящик пива за отзыв</h2>
                <img className="img-desk" src={require('../../images/beer-box.png')} alt={''}/>
                <img className="img-mob" src={require('../../images/beer-box-mob.png')} alt={''}/>
                <div className="btn-about">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a className="btn btn-prim" href='https://untappd.com/4brewers/' target='_blank'>оставить отзыв</a> 
                </div>
            </section>

            <Job />

            <img className='bg-beer' src={require('../../images/bg-beer.svg').default} alt=''/>

        </div>
    )
}

export default Main;
