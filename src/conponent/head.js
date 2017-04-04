import React, {Component} from 'react';
import './common.css';
import set from './set.png'

export default class Head extends Component {
    constructor(props) {
        super(props);
        this.whitchCourse = this.whitchCourse.bind(this);
    }

    whitchCourse() {
        let aa;
        this.props.courseList.map((obj, index)=> {
            if (obj.cname == this.props.grade.course) {
                aa =<label style={{color:"#fff"}}>第{index+1}教学周期</label>
            }
        }, this);
        return aa
    }

    render() {
        // console.log(this.props)
        let time = new Date().getYear() + 1900;
        return (
            <div className="head-box">
                <label style={{color:"#fff",fontFamily:"微软雅黑"}} className="school">数字媒体学院</label>
                <label style={{color:"#fff",fontFamily:"微软雅黑"}} className="classe">{
                    time
                }</label>
                <label style={{color:"#fff",fontFamily:"微软雅黑"}} className="teac">
                    {
                         this.whitchCourse()
                    }
                </label>
                {/*<label style={{color:"#fff",fontFamily:"微软雅黑"}} className="teac">*/}
                    {/*{*/}
                        {/*this.props.courseList.cname*/}
                    {/*}*/}
                {/*</label>*/}
<div className="pict">
             <img src={set} className="picture" />
</div>
            </div>
        );
    }
}


