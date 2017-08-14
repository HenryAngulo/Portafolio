import React from 'react';
import {FooterIcons} from '../content/TechSvgs';
import TechIcon from './TechIcon';
import './css/Footer.css';

const message = {
    'ES' : '¡No dudes en contactarme!',
    'EN' : "Don't hesitate to get in touch with me!",
    'FR' : 'Ne hésitez pas à me contacter!'
}

function Footer({lang}){
    return (
        <div className="footer">
            <div className="container">
                <h2>{message[lang]}</h2>
                <div className="icon-container">
                    {FooterIcons.map((icon, index) =>
                        <TechIcon key={index} name={icon.name}>
                            <a href={icon.link} target="_blank">
                            {icon.svg}
                            </a>
                        </TechIcon>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Footer;