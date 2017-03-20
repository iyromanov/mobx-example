import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';

import UserStore from './stores/UserStore';
import routes from './routes';
import './index.css';

enableLogging();

const stores = { user: UserStore };

ReactDOM.render(
  <Provider {...stores}>
    { routes }
  </Provider>,
  document.getElementById('root')
);
