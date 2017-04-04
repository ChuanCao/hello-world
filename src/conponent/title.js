import React, {Component} from 'react';
import './common.css';

export default class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            //标签中的内容及title的背景色
            <div className="title" style={{backgroundColor:this.props.bgcolor}}>
            <img className="Img_jiaxin" src={this.props.src}/>
            <div>
                {
                    this.props.name
                }
            </div>
            </div>
        );
    }
}



