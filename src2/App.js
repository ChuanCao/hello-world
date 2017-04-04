import React, {Component} from 'react';

import './App.css';
import Left from './left';
import Right from './right';


class App extends Component {
    constructor(props){
        super(props);
        this.add=this.add.bind(this);
        this.minus=this.minus.bind(this);
        this.state={
            value:0,
        }
    }
    render() {
        return (
            <div className="App">
                <Left add={this.add} minus={this.minus} store={this.props.store}/>
                <Right value={this.state.value} store={this.props.store}/>
            </div>
        );
    }
    add(){
        this.setState({
            value:this.state.value+1
        })
    }
    minus(){
        this.setState({
            value:this.state.value-1
        })
    }
}


export default App;
