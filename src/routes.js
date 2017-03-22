import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App/App';
import RootPage from './components/RootPage';
import UserPage from './components/UserPage';

export default (
    <Router history={ browserHistory }>
        <Route path='/' component={ App }>
            <IndexRoute component={ RootPage } />
            <Route path='user' component={ UserPage } />
        </Route>
    </Router>
);