import React from "react";
import JobSection from "../../components/sections/job-section/job-section";
import { TEAM_DATA } from "../../service/consts";
import './team.scss';

const Team = () => {
    return (
        <div className="team">

            <JobSection />

            <section className="container team-section">
                <div className="inner-p">
                    <h2 className="container-title h1">Команда</h2>

                    <div className="team-section-content">
                        <p>За каждой банкой и за каждой бутылкой имперского стаута, охмелённого ай-пи-эй или густого смузи эля стоит работа технолога, что делал тесты десяти вариаций вкуса, рабочего, который молол солод, пивовара, неустанно следившего за фильтрацией, работника розлива, который переклеивал чуть неровно наклеенную этикетку, бухгалтера, сверявшего каждую запятую в накладной и всех этих людей, тщательно заботящихся о каждой мелочи при разработке, производстве, продаже и доставке пива до вас.</p>
                        <h4>И без которых не было бы 4brewers!</h4>

                        <div className="content-photos">
                            {TEAM_DATA.map((item) => (
                                <div className="team-member">
                                    <img src={require(`../../images/team/${item.image}`)} alt='' className="team-member__photo"/>
                                    <img src={require('../../images/team/hover.svg').default} alt='' className="team-member__hover"/>
                                    <div className="team-member__text">
                                        <p>{item.name}</p>
                                        <p>{item.position}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </section>

            <img className='bg-beer' src={require('../../images/bg-beer.svg').default} alt=''/>


        </div>
    )
}

export default Team;
