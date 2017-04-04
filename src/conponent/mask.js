import React, {Component} from 'react';
import './common.css';
//遮罩组件
export default class Mask extends Component {
    constructor(props) {
        super(props);
    }

    render() {
            //console.log(this.props.showMask)//this.props.showMask为当前点击的对象
        return (
            <div style={{display:this.props.showMask==false?"none":"block"}}>//遮罩消失:显示
                <div className="mask">
            </div>
            <div className="confirm">
                <div className="maskItem">
                    <p className="mask-title">
                        {
                            this.props.showMask.type===1?"奖励加薪项目":"惩罚减薪项目"
                        }
                    </p>
                    <div className="sort">
                        <div className="sort-left">
                            {
                                this.props.showMask.name
                            }
                        </div>
                        <div className="sort-right">
                            {
                                this.props.showMask.score
                            }
                        </div>
                    </div>
                    <form className="mask_form">
                        <label onClick={this.props.cancelMask}>取消</label>
                        <label onClick={()=>this.props.changeScore(this.props.showMask)}>确定</label>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}


