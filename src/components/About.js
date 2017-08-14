import React from 'react';
import CardItem from './CardItem';
import  { basicInfo, skillInfo, expInfo, educInfo, educComInfo, titles } from '../content/AboutContent';
import './css/About.css';

function About({lang}) {
    return (
        <div className="container about">
            <div className="about-l">
                <div className="Basic-Info">
                    <h3>{titles.basicInfo[lang]}</h3>
                    {basicInfo.map(element => 
                        <div className="info-element">
                        <p className="field">{element.field[lang]}:</p>
                        <p className="value">{element.value}</p>
                        </div>
                    )}
                </div>
                <div className="Tech-info">
                    <h3>{titles.skillInfo[lang]}</h3>
                    {skillInfo[lang].map(element =>
                        <CardItem
                            title={element.title}
                            isExpandable={true}
                        >
                            {element.content}
                        </CardItem>
                    )}
                </div>
            </div>

            <div className="about-r">
              <div className="experiencia">
                <h3>{titles.expInfo[lang]}</h3>
                {expInfo[lang].map(element =>
                    <CardItem
                        title={element.title}
                        subtitle={element.subtitle}
                    >
                        {element.content}
                    </CardItem>
                )}
              </div>
              <div className="educacion">
                <h3>{titles.educInfo[lang]}</h3>
                <CardItem 
                    title={educInfo[lang].title}
                    subtitle={educInfo[lang].subtitle}
                /> 
              </div>
              <div className="cursos">
              <h3>{titles.educComInfo[lang]}</h3>
              {educComInfo[lang].map(element =>
                    <CardItem
                        title={element.title}
                        subtitle={element.subtitle}
                    >
                        {element.content}
                    </CardItem>
              )}
              </div>
            </div>
        </div>
    );
}

export default About;