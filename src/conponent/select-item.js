import React, {Component} from 'react';
import './common.css';

//创建selectItem组件并抛出;
export default class selectItem extends Component {
    constructor(props) {
        super(props);
    }

//每一个子盒子selectItem绑定点击事件,以及点击完之后背景颜色改变;标签中为获取到的每一个学生的名字
    render() {
        return (
            //从container.js的data中拿到sname
            <div className="selectItem" onClick={()=>this.props.changeIndex(this.props.index)}
            style={{backgroundColor:this.props.clickedStudent==this.props.index?"#eed63b":""}}>
                {
                    this.props.student.sname
                }
            </div>
        );
    }
}


