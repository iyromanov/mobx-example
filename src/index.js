import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import App from './components/app/app';
import userStore from './stores/user-store';
import clickStore from './stores/click-store';
import './index.css';

useStrict(true);

const stores = { userStore, clickStore };

ReactDOM.render(
	<Provider { ...stores }>
		<App />
	</Provider>,
	document.getElementById('root')
);
