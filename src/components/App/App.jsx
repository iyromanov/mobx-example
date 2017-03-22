import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import logo from './img/logo.svg';
import ClickCounter from '../ClickCounter';
import './App.css';

@inject('user', 'click')
@observer
class App extends Component {
    componentDidMount() {
        this.props.user.fetchUser();
    }

    render() {
        const { isBusy, name } = this.props.user;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>
                
                { isBusy && <h2>Loading...</h2> }
                { !isBusy && <h2>{`Hello, ${name}!` }</h2> }
                
                {/*<ClickCounter click={ { counter: this.props.click.counter } } />*/}
                <ClickCounter />
                
                { this.props.children }
                <DevTools />
            </div>
        );
    }
}

export default App;
