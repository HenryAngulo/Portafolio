import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
 
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#039BE5",
        primary2Color: "#0086c3",
        primary3Color: "#73e8ff",
        accent1Color: "#ff1744",
        accent2Color: "#ff616f",
        accent3Color: "#c4001d",
        textColor: "#616161",
    },
});

const MuiTheme = () =>  (
      <MuiThemeProvider muiTheme={muiTheme}>
            <App />
      </MuiThemeProvider>);

ReactDOM.render(<MuiTheme />, document.getElementById('root'));
registerServiceWorker();
