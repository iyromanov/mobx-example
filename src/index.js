import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import UserStore from './stores/UserStore';
import ClickStore from './stores/ClickStore';
import routes from './routes';
import './index.css';

useStrict(true);

const stores = { user: UserStore, click: ClickStore };

ReactDOM.render(
	<Provider { ...stores }>
		{ routes }
	</Provider>,
	document.getElementById('root')
);
