import React from 'react';
import Header from './Header';
import HomeItem from './HomeItem';
import './css/Home.css';
import { introInfo, itemsInfo } from '../content/HomeContent';


function Home({lang}){
    return (
        <div>  
            <Header lang={lang}/> 
            <div className="container">
                <div className="intro">
                    <div className="intro-text">
                        {introInfo[lang]}
                    </div>
                    <div>
                     <img src='./img/perfil.jpg' alt="foto de perfil"/>
                    </div>
                </div>
                <div className="item-container">
                    {itemsInfo[lang].map(element => 
                    <HomeItem 
                        name={element.name} 
                        src={element.src} 
                        text={element.text} 
                    />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;