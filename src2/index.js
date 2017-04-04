import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import { Router, Route, hashHistory } from 'react-router';
import {createStore} from 'redux'
import todo from './reducers';

let store = createStore(todo);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);
