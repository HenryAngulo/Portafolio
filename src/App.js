import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavigationContainer from './containers/NavigationContainer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import SelectLang from './components/SelectLang';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            lang : 'ES', 
        };
        this.selectLang = this.selectLang.bind(this);
    }

    selectLang(event, index, value){
        this.setState({lang: value});
    }
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationContainer lang={this.state.lang} />
          <div className="content">
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} lang={this.state.lang}/>} />
              <Route exact path="/CV" render={(props) => <About {...props} lang={this.state.lang}/>} />
              <Route exact path="/portfolio" render={(props) => <Portfolio {...props} lang={this.state.lang}/>} />
            </Switch>
            <Footer lang={this.state.lang} />
            <SelectLang 
              lang={this.state.lang}
              selectLang={this.selectLang}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
