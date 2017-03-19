import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import logo from './logo.svg';
import './App.css';

@inject('user')
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
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        { isBusy && <h2>Loading...</h2> }
        { !isBusy && <h2>{ `${name}, hello!` }</h2> }
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
