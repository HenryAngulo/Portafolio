import React from 'react';
import './css/Header.css';
import TechIcons from '../content/TechSvgs';
import TechIcon from './TechIcon';
import { headerSub } from '../content/HomeContent';

function Header({lang}){
    return(
        <div className="header">
           <div className="header-item">
            <h1>HENRY ANGULO</h1>
            <h2>{headerSub[lang]}</h2>
           </div>
           <div className="icon-container">
            {TechIcons.map((icon, index) =>
                <TechIcon key={index} name={icon.name}>
                    {icon.svg}
                </TechIcon>
            )}
           </div>
        </div>
    );
}

export default Header;