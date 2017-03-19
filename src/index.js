import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';

import App from './components/App/App';
import UserStore from './stores/UserStore';
import './index.css';

enableLogging();

const stores = { user: UserStore };

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
