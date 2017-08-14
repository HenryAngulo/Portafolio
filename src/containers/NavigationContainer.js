import React from 'react';
import Navigation from '../components/Navigation';

class NavigationContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location : 'home', 
            isDrawerOpen: false,
        };
        this.togleDrawer = this.togleDrawer.bind(this);
        this.changeAndClose = this.changeAndClose.bind(this);
    }

    togleDrawer(){
        this.setState(prevState => ({
            isDrawerOpen: !prevState.isDrawerOpen
        }));
    }
    changeAndClose(location) {
        this.setState({isDrawerOpen:false, location});
    }

    render() {
        return (
                <Navigation
                 location={this.state.location} 
                 isDrawerOpen={this.state.isDrawerOpen}
                 togleDrawer={this.togleDrawer}
                 changeAndClose={this.changeAndClose}
                 lang={this.props.lang}
                 />
            );
    }

}

export default NavigationContainer;