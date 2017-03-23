import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import logo from './img/logo.svg';
import ClickCounter from '../click-counter/click-counter';
import './app.css';

@inject('userStore', 'clickStore')
@observer
class App extends Component {
    componentDidMount() {
        this.props.userStore.fetchUser();
    }

    render() {
        const { isBusy, name } = this.props.userStore;
        const { value } = this.props.clickStore;

        return (
            <div className="App">
                { this.renderHeader() }
                
                <h2>
                    { isBusy && 'Loading...' }
                    { !isBusy && `Hello, ${name}!` }
                </h2>
                
                <ClickCounter { ...{ value } } />

                <a onClick={ this.handleLinkClick }>Click me!</a>
                    
                <DevTools />
            </div>
        );
    }

    renderHeader() {
        return (
            <div className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
            </div>
        );
    }

    handleLinkClick = () => {
        // this.props.clickStore.value++;
        this.props.clickStore.increment();
    }
}

export default App;
