import React, {Component} from 'react';

import './App.css';
import {add,minus} from './actions'

class Left extends Component {
    render() {
     
        return (
            <div className="App">
                 <button onClick={()=>this.props.store.dispatch(add(2))}>加数据</button>
                 <button onClick={()=>this.props.store.dispatch(minus(3))}>减数据</button>
            </div>
        );
    }

}


export default Left;
