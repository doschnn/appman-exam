import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import store from './lib/store';
import { Provider } from 'react-redux'

const appElement = document.getElementById('app');

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(
        <Provider store={store}>
            <NextApp/>
        </Provider>
        , appElement);
    });
}

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , appElement);