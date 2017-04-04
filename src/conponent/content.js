import React, {Component} from 'react';
import './common.css';
import Score from './score'//分数组件,选择不同学生显示分数
import Title from './title'//title内容及标签背景色;
import SalaryIncrease from './salary_increase'//加薪
import SalaryDecrease from './salary_decrease'//减薪
import Jiaxin from './jiaxin.png'
import Decrease from './decrease.png'

export default class Content extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        //console.log(this.props.rewards)
        return (
            <div className="content-box">
                <div className="content-inner-box">
                    <Score score={this.props.student.score}/>
                    <Title name="奖励加薪项目" bgcolor="#eed63b" color="#000" src={Jiaxin}/>
                    <div className="increase-box">
                        {
                            this.props.rewards.map((obj,index)=>{//rewards为加薪减薪所有对象,参考17行!!!
                                //console.log(obj)//obj为type=1的所有对象,即reward为type==1;
                                if(obj.type==1){
                                return <SalaryIncrease reward={obj}
                                                        key={index}
                                                       showMask={this.props.showMask}
                                />
                                }
                            })
                        }
                    </div>
                    <Title name="惩罚减薪项目" bgcolor="#544b14" color="#fff" src={Decrease}/>
                    <div className="decrease-box">
                        <div className="arc">

                        </div>
                        {
                            this.props.rewards.map((obj,index)=>{
                                //console.log(obj)//obj为所有type=2的对象
                                if(obj.type==2){
                                    return <SalaryDecrease reward={obj}
                                                            key={index}
                                                            showMask={this.props.showMask}
                                    />
                                }
                            })
                        }
                    </div>

                </div>
            </div>
        );
    }
}


