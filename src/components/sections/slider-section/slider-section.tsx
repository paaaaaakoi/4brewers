/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { SLIDER_DATA } from '../../../service/consts';
import './slider-section.scss';


const SliderSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slide = SLIDER_DATA[currentIndex];

    return (
        <section className="container">
            <div className="slide" style={{background: `radial-gradient(22.82% 89.51% at 71.09% 46.58%, ${slide.bgTheme ? slide.bgTheme[0] : ''} 0%, ${slide.bgTheme ? slide.bgTheme[1] : ''} 100%)`}}>
                <div className="body">

                    <div className="desc">
                        <div className="social-medias">
                            <a href={'https://untappd.com/4brewers'} target='_blank'>
                                <img src={require('../../../images/icons/social-medias/untappd.svg').default} alt=''/>
                            </a>
                            <a href={'https://vk.com/4brewers'} target='_blank'>
                                <img src={require('../../../images/icons/social-medias/vk.svg').default} alt=''/>
                            </a>
                            <a href={'https://www.facebook.com/4brewers.ru'} target='_blank'>
                                <img src={require('../../../images/icons/social-medias/facebook.svg').default} alt=''/>
                            </a>
                            <a href={'https://www.instagram.com/4brewers.ru/'} target='_blank'>
                                <img src={require('../../../images/icons/social-medias/instagram.svg').default} alt=''/>
                            </a>
                        </div>

                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                        
                        <div className="props">
                            <p className="taste">{slide.taste}</p>
                            <p>{Object.entries(slide.props).map(([key, val]) => `${key} ${val}`).join(', ')}</p>
                        </div>
                    </div>

                    <div>
                        <a className="btn" href="/sorts">подробнее</a>
                    </div>

                    <div className="controls">
                        <div className="arrows">
                            <img
                                src={require('../../../images/icons/arrow-l.svg').default}
                                alt=''
                                onClick={() => currentIndex === 0 ? setCurrentIndex(2) : setCurrentIndex(currentIndex - 1)}/>
                            <img
                                src={require('../../../images/icons/arrow-r.svg').default}
                                alt=''
                                onClick={() => currentIndex === 2 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)}/>
                        </div>

                        <div className="points">
                            <div className={`${currentIndex === 0 && 'active'}`}></div>
                            <div className={`${currentIndex === 1 && 'active'}`}></div>
                            <div className={`${currentIndex === 2 && 'active'}`}></div>
                        </div>
                    </div>
                </div>

                <img className="img" alt={slide.title} src={require(`../../../images/slides/${slide.image}`)}/>
            </div>
        </section>
    )
}

export default SliderSection;