import React, {Component} from 'react';

import './App.css';


class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.store.getState().culculator
        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.value
                }
            </div>
        );
    }

    componentDidMount() {
        this.props.store.subscribe(()=> {
            this.setState({
                value: this.props.store.getState().culculator
            })
        })
    }
}


export default Right;
