import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Container from './container/container';//所有组件
import { Router, Route, hashHistory } from 'react-router';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/aa" component={Container}/>
    </Router>,
  document.getElementById('root')
);
