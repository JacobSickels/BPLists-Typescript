import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './app/redux/store';
import AppRouter from './app/common/router/AppRouter';

const store = configureStore();

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root') as HTMLElement);

registerServiceWorker();
