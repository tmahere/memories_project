import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //global state == acceses store from anywhere in the app -- dont have to be in a parent component or child componenet ? -- research
import {legacy_createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import { formatMs } from '@material-ui/core';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>,
document.getElementById('root')
);