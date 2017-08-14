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

function Navigation(props) {
    const { lang, location } = props;
    return (
        <div>
            <AppBar 
                className="AppBar"
                title={pages[location][lang]}
                onLeftIconButtonTouchTap={props.togleDrawer}
            />
            <Drawer 
                open={props.isDrawerOpen}
                docked={false}
                onRequestChange={props.togleDrawer}
                >
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
            </Drawer>
        </div>
        )
}

export default  Navigation;