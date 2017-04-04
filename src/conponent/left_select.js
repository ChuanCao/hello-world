import React, {Component} from 'react';
import './common.css';
import SelectItem from './select-item';

export default class leftSelect extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="left-box">
                <div className="parson">
                    <div className="circle"></div>
                </div>
<div className="zilao">
            123
            </div>
                {
                    this.props.students.map((obj,index)=>{
                        return  <SelectItem student={obj}
                            key={index}
                            changeIndex={this.props.changeIndex}
                            index={index}
                            clickedStudent={this.props.clickedStudent}
                        />
                    })
                }
            </div>
        );
    }
}


