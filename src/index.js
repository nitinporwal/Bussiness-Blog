import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const state=createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={state} >
        <App />
    </Provider>,
    document.querySelector('#root')
);