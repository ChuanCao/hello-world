import React, {Component} from 'react';
import './common.css';
import money from './money.png'
export default class Score extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            //从container.js中的data拿到数据
            <div className="score">
                <div className="content">
                    <img className="Img_money" src={money}/>
                    <span className="thisweek">本教学周期薪酬</span>
                    <div className="basic_money">
                        {
                            this.props.score
                        }
                    </div>
                </div>
            </div>
        );
    }
}


