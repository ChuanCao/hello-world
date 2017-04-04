import React, {Component} from 'react';
import './common.css';

//加薪项目组件
export default class SalaryIncrease extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this)//rewards中的每一个对象
        return (
            //showMask事件传到increaseItem,点击increaseItem,showMask显示
            <div className="increaseItem" onClick={()=>this.props.showMask(this.props.reward)}>
                <div className="eachIncreaseItem">
                    {
                        this.props.reward.name
                    }
                    <div className="increaseMoney" style={{color:this.props.reward.color}}>
                    {
                        this.props.reward.score

                    }
                    </div>
                </div>

            </div>
        );
        console.log(this)
    }
}



