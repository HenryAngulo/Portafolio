import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import './css/Navigation.css';

const pages = {
    'home': {
        'ES' : 'Inicio',
        'EN' : 'Home',
        'FR' : 'Accueil',
    },
    'cv' : {
        'ES': 'CV',
        'EN': 'CV',
        'FR': 'CV',
    },
    'portfolio': {
        'ES' : 'Portafolio',
        'EN' : 'Portfolio',
        'FR' : 'Portefeuille',
    }
};

const footer = {
    'ES': <div className="footer-text">Portafolio hecho como una SPA (Single Page App), desarrollado en React, diseñado y traducido por mí. <br/> <a href="https://github.com/HenryAngulo/Portafolio" target="_blank">Click para ver codigo fuente</a></div>,
    'EN': <div className="footer-text">Portfolio made as a SPA (Single Page App), developed using React, designed and translated by me. <br/> <a href="https://github.com/HenryAngulo/Portafolio" target="_ Blank"> Click to view source code</a></div> ,
    'FR': <div className="footer-text">Portefeuille fait comme une Spa (Single Page App), développé en utilisant React, conçu et traduit par moi. <br/> <a href="https://github.com/HenryAngulo/Portafolio" target="_ Blank"> Cliquez pour voir le code source</a></div>
}

function Navigation(props) {
    const { lang, location } = props;
    return (
        <div className="nav">
            <AppBar 
                className="AppBar"
                title={pages[location][lang]}
                onLeftIconButtonTouchTap={props.togleDrawer}
            />
            <Drawer 
                open={props.isDrawerOpen}
                docked={false}
                onRequestChange={props.togleDrawer}
                className="drawer"
                >
              <MenuItem className="drawer-title">
                HENRY ANGULO
              </MenuItem>
              <Link to="/">
                <MenuItem onClick={() => props.changeAndClose('home')}>
                {pages['home'][lang]}
                </MenuItem>
              </Link>
              <Link to="/CV">
                <MenuItem onClick={() => props.changeAndClose('cv')}>
                CV
                </MenuItem>
              </Link>
              <Link to="/portfolio">
                <MenuItem onClick={() => props.changeAndClose('portfolio')}>
                {pages['portfolio'][lang]}
                </MenuItem>
              </Link>
              {footer[lang]}
            </Drawer>
        </div>
        )
}

export default  Navigation;