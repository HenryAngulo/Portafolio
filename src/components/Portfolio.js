import React from 'react';
import CardItem from './CardItem';
import portfolioInfo from '../content/PortfolioContent';
import './css/Portfolio.css';

function Portfolio({lang}){
    return(
        <div className="portfolio container">
            {portfolioInfo[lang].map(element =>
                <CardItem
                    title={element.name}
                    src={element.src}
                    lang={lang}
                    link={element.link}
                >
                    {element.text}
                </CardItem>
            )}
        </div>
    );
}

export default Portfolio;