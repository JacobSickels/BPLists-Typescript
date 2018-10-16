import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { Home } from '../../views/home/Home';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route component={Home} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
