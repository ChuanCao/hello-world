import React,{Component} from 'react';
import './common.css';

//减薪项目组件
export default class SalaryDecrease extends Component{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props);
        return (
            //showMask事件传到increaseItem,点击increaseItem,showMask显示
            <div className="decreaseItem" onClick={()=>this.props.showMask(this.props.reward)}>
                <div className="yuan"></div>
                <div className="yuanCopy"></div>
                <div className="jianshu">
                    {
                        this.props.reward.score

                    }
                </div>

                <div className="jian">
                    {
                        this.props.reward.name
                    }
                </div>

            </div>
        );
    }
}