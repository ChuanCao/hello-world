import React, {Component} from 'react';
import Head from '../conponent/head';//头部组件
import Content from'../conponent/content'//中间右侧组件
import LeftSelect from'../conponent/left_select'//左侧选择学生组件
import Mask from'../conponent/mask'//遮罩组件,取消确定

//Container总组件
class Container extends Component {
    constructor(props) {
        super(props);
        //改变学生
        this.changeIndex = this.changeIndex.bind(this);
        //显示弹出框
        this.showMask = this.showMask.bind(this);
        //关闭弹出框
        this.cancelMask = this.cancelMask.bind(this);//3
        //修改分数
        this.changeScore = this.changeScore.bind(this);
        this.state = {//相当于数据库
            //原始数据
            data: {
                "message": "登录成功",
                "students": [{
                    "id": 1,
                    "pid": 1,
                    "sname": "李威",
                    "sex": "1",
                    "identity": "123",
                    "sno": "160201",
                    "init": 100000,
                    "score": 10425,
                    "status": "1",
                    "createTime": null,
                    "updateTime": "2017-03-05 17:36:33",
                    "market": "鲁东市场部",
                    "pic": null,
                    "beginsDate": null,
                    "term": "一年",
                    "birthday": "123"
                }, {
                    "id": 2,
                    "pid": 1,
                    "sname": "李红叶",
                    "sex": null,
                    "identity": null,
                    "sno": "160202",
                    "init": 100,
                    "score": 11025,
                    "status": "1",
                    "createTime": null,
                    "updateTime": null,
                    "market": null,
                    "pic": null,
                    "beginsDate": null,
                    "term": null,
                    "birthday": null
                }, {
                    "id": 3,
                    "pid": 1,
                    "sname": "何斌",
                    "sex": null,
                    "identity": null,
                    "sno": "160203",
                    "init": 100,
                    "score": 11005,
                    "status": "1",
                    "createTime": null,
                    "updateTime": null,
                    "market": null,
                    "pic": null,
                    "beginsDate": null,
                    "term": null,
                    "birthday": null
                }, {
                    "id": 4,
                    "pid": 1,
                    "sname": "支晨霞",
                    "sex": null,
                    "identity": null,
                    "sno": "160204",
                    "init": 100,
                    "score": 11100,
                    "status": "1",
                    "createTime": null,
                    "updateTime": null,
                    "market": null,
                    "pic": null,
                    "beginsDate": null,
                    "term": null,
                    "birthday": null
                }, {
                    "id": 5,
                    "pid": 1,
                    "sname": "杨益",
                    "sex": null,
                    "identity": null,
                    "sno": "160205",
                    "init": 100,
                    "score":10000,
                    "status": "1",
                    "createTime": null,
                    "updateTime": null,
                    "market": null,
                    "pic": null,
                    "beginsDate": null,
                    "term": null,
                    "birthday": null
                }, {
                    "id": 25,
                    "pid": 1,
                    "sname": "杨海文",
                    "sex": "1",
                    "identity": "5",
                    "sno": "4",
                    "init": 10000,
                    "score": 10010,
                    "status": "1",
                    "createTime": "2017-03-04 16:44:06",
                    "updateTime": "2017-03-05 12:46:47",
                    "market": "鲁东市场部",
                    "pic": null,
                    "beginsDate": "8",
                    "term": "一年",
                    "birthday": "6"
                }, {
                    "id": 26,
                    "pid": 1,
                    "sname": "杨海静",
                    "sex": "1",
                    "identity": "77",
                    "sno": "66",
                    "init": 10000,
                    "score": 10000,
                    "status": "1",
                    "createTime": "2017-03-04 16:45:41",
                    "updateTime": "2017-03-04 16:45:41",
                    "market": "é2?????????oé?¨",
                    "pic": null,
                    "beginsDate": "99",
                    "term": "????1′",
                    "birthday": "88"
                }, {
                    "id": 27,
                    "pid": 1,
                    "sname": "周平",
                    "sex": "1",
                    "identity": "123123123",
                    "sno": "123123123",
                    "init": 10000,
                    "score": 10000,
                    "status": "3",
                    "createTime": "2017-03-04 16:55:48",
                    "updateTime": "2017-03-06 13:49:47",
                    "market": "鲁东市场部",
                    "pic": null,
                    "beginsDate": "123123123",
                    "term": "一年",
                    "birthday": "123123123"
                }, {
                    "id": 28,
                    "pid": 1,
                    "sname": "夏立飞",
                    "sex": "1",
                    "identity": "44",
                    "sno": "33",
                    "init": 10000,
                    "score": 10000,
                    "status": "1",
                    "createTime": "2017-03-04 17:00:09",
                    "updateTime": "2017-03-04 17:00:09",
                    "market": "é2?????????oé?¨",
                    "pic": null,
                    "beginsDate": "66",
                    "term": "????1′",
                    "birthday": "55"
                }, {
                    "id": 29,
                    "pid": 1,
                    "sname": "刘振",
                    "sex": "1",
                    "identity": "123123",
                    "sno": "123123",
                    "init": 10000,
                    "score": 10000,
                    "status": "2",
                    "createTime": "2017-03-04 17:11:00",
                    "updateTime": "2017-03-05 13:16:19",
                    "market": "鲁东市场部",
                    "pic": null,
                    "beginsDate": "123123",
                    "term": "一年",
                    "birthday": "123123"
                }, {
                    "id": 30,
                    "pid": 1,
                    "sname": "吴金峰",
                    "sex": "1",
                    "identity": "123123",
                    "sno": "123123",
                    "init": 10000,
                    "score": 10000,
                    "status": "2",
                    "createTime": "2017-03-05 10:50:27",
                    "updateTime": "2017-03-05 13:17:52",
                    "market": "鲁东市场部",
                    "pic": null,
                    "beginsDate": "123123",
                    "term": "一年",
                    "birthday": "123123"
                }, {
                    "id": 31,
                    "pid": 1,
                    "sname": "王耀光",
                    "sex": "1",
                    "identity": "132",
                    "sno": "",
                    "init": 10000,
                    "score": 10000,
                    "status": "2",
                    "createTime": "2017-03-05 10:52:13",
                    "updateTime": "2017-03-05 14:15:03",
                    "market": "鲁东市场部",
                    "pic": null,
                    "beginsDate": "",
                    "term": "一年",
                    "birthday": "123"
                }, {
                    "id": 33,
                    "pid": 1,
                    "sname": "段玉荣",
                    "sex": "1",
                    "identity": "123123",
                    "sno": "123123",
                    "init": 10000,
                    "score": 10000,
                    "status": "1",
                    "createTime": "2017-03-06 14:10:01",
                    "updateTime": "2017-03-08 16:46:33",
                    "market": "鲁东市场部",
                    "pic": null,
                    "beginsDate": "123123",
                    "term": "一年",
                    "birthday": "123123"
                }],
                "teacherList": [{"tid": 7, "tname": "苗林超", "type": "1", "officeType": "1"}, {
                    "tid": 8,
                    "tname": "胡乃全",
                    "type": "2",
                    "officeType": "1"
                }, {"tid": 9, "tname": "梁静", "type": "2", "officeType": "1"}, {
                    "tid": 10,
                    "tname": "孙绍瑜",
                    "type": "1",
                    "officeType": "1"
                }, {"tid": 11, "tname": "施丽芳", "type": "1", "officeType": "1"}, {
                    "tid": 12,
                    "tname": "李欢欢",
                    "type": "2",
                    "officeType": "1"
                }, {"tid": 13, "tname": "腾琴琴", "type": "1", "officeType": "1"}, {
                    "tid": 14,
                    "tname": "陈梦",
                    "type": "2",
                    "officeType": "1"
                }, {"tid": 15, "tname": "杨小艳", "type": "2", "officeType": "1"}, {
                    "tid": 16,
                    "tname": "张俊杰",
                    "type": "1",
                    "officeType": "1"
                }, {"tid": 17, "tname": "刘旭东", "type": "1", "officeType": "1"}, {
                    "tid": 18,
                    "tname": "赵子文",
                    "type": "1",
                    "officeType": "1"
                }],
                "status": 200,
                "rewards": [{"id": 3, "name": "演讲比赛", "type": "1", "des": "", "score":200,"color":"#dea033"}, {
                    "id": 4,
                    "name": "三好学生",
                    "type": "1",
                    "des": "",
                    "score":5
                }, {"id": 5, "name": "打扫卫生", "type": "1", "des": "", "score": 200}, {
                    "id": 6,
                    "name": "班级争光",
                    "type": "1",
                    "des": "",
                    "score": 5
                }, {"id": 7, "name": "三好学生", "type": "1", "des": "", "score": 200}, {
                    "id": 8,
                    "name": "上课迟到",
                    "type": "2",
                    "des": "",
                    "score": -10
                }, {"id": 9, "name": "上课早退", "type": "2", "des": "", "score": -5}, {
                    "id": 10,
                    "name": "上课戴耳机",
                    "type": "2",
                    "des": "",
                    "score":-9
                }, {"id": 11, "name": "不跑早操", "type": "2", "des": "", "score": -5}, {
                    "id": 12,
                    "name": "上课吃东西",
                    "type": "2",
                    "des": "",
                    "score": -8
                }, {"id": 13, "name": "上课玩游戏", "type": "2", "des": "", "score": -5}, {
                    "id": 14,
                    "name": "上课看视频",
                    "type": "2",
                    "des": "",
                    "score":-20
                }, {"id": 15, "name": "打架", "type": "2", "des": "", "score": -5}, {
                    "id": 16,
                    "name": "吸烟",
                    "type": "2",
                    "des": "",
                    "score":-50
                }, {"id": 17, "name": "喝酒", "type": "2", "des": "", "score": -5}, {
                    "id": 18,
                    "name": "辱骂上司",
                    "type": "2",
                    "des": "",
                    "score":-20
                }, {"id": 19, "name": "宿舍卫生差", "type": "2", "des": "", "score": -5}, {
                    "id": 20,
                    "name": "个人卫生差",
                    "type": "2",
                    "des": "",
                    "score":-10
                }, {"id": 21, "name": "宿舍优秀", "type": "2", "des": "", "score":10}, {
                    "id": 22,
                    "name": "宿舍优秀",
                    "type": "1",
                    "des": null,
                    "score":+10
                }, {"id": 23, "name": "帮助同学", "type": "1", "des": null, "score": 5}, {
                    "id": 24,
                    "name": "帮助同学",
                    "type": "1",
                    "des": null,
                    "score":5
                }, {"id": 25, "name": "文明", "type": "1", "des": null, "score":3}, {
                    "id": 26,
                    "name": "长得好看",
                    "type": "1",
                    "des": null,
                    "score":+5000
                }, {"id": 27, "name": "上课迟到", "type": "2", "des": null, "score": 55}, {
                    "id": 28,
                    "name": "迟到加早退",
                    "type": "2",
                    "des": null,
                    "score":-50
                }],
                "courseList": [{
                    "id": 7,
                    "cname": "PS & AI图标与界面设计软件",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 8, "cname": "WUI & MUI设计规范|Html&Css基础", "tname": null, "type": "1", "score": null}, {
                    "id": 9,
                    "cname": "Html&Css实战",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 10, "cname": "JavaScript", "tname": null, "type": "1", "score": null}, {
                    "id": 11,
                    "cname": "项目实训一",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 12, "cname": "JavaScript高级|JQuery", "tname": null, "type": "1", "score": null}, {
                    "id": 13,
                    "cname": "Html5&Css3",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 14, "cname": "Html5&Css3高级|Bootstrap", "tname": null, "type": "1", "score": null}, {
                    "id": 15,
                    "cname": "WebAPP开发|HybridApp",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 16, "cname": "项目实训二", "tname": null, "type": "1", "score": null}, {
                    "id": 17,
                    "cname": "微信订阅号开发",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 18, "cname": "Angular.Js", "tname": null, "type": "1", "score": null}, {
                    "id": 19,
                    "cname": "React框架",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 20, "cname": "Php|Php开发框架", "tname": null, "type": "1", "score": null}, {
                    "id": 21,
                    "cname": "项目实训三",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 22, "cname": "程序开发项目流程", "tname": null, "type": "1", "score": null}, {
                    "id": 23,
                    "cname": "node.Js",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 24, "cname": "node.Js|数据库应用", "tname": null, "type": "1", "score": null}, {
                    "id": 25,
                    "cname": "毕业设计",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 26, "cname": "企业实习实训", "tname": null, "type": "1", "score": null}, {
                    "id": 27,
                    "cname": "数据库MySQL|SQL Server|Oracle数据库优化",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 28, "cname": "SSM框架", "tname": null, "type": "1", "score": null}, {
                    "id": 29,
                    "cname": "Linux操作系统|熟悉Linux下常用服务器搭建",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 30, "cname": "大数据基础|java基础", "tname": null, "type": "1", "score": null}, {
                    "id": 31,
                    "cname": "校内实习实训",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {
                    "id": 32,
                    "cname": "面向对象编程技术，配置工具使用服务器配置调优，数据库建模",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {
                    "id": 33,
                    "cname": "服务器配置调优，数据库建模     Web策划运作(线上，线下)",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 34, "cname": "毕业设计", "tname": null, "type": "1", "score": null}, {
                    "id": 35,
                    "cname": "毕业论文",
                    "tname": null,
                    "type": "1",
                    "score": null
                }, {"id": 36, "cname": "企业实习实训", "tname": null, "type": "1", "score": null}],
                "grade": {
                    "id": 1,
                    "gname": "1602A",
                    "gscore": 100430,
                    "ginit": 2500,
                    "gcount": 13,
                    "gstatus": "1",
                    "createTime": null,
                    "updateTime": "2017-03-06 18:01:52",
                    "teacher": "苗林超",
                    "header": "胡乃全",
                    "course": "PS & AI图标与界面设计软件",
                    "officeType": "1",
                    "officeName": "WEB教研室",
                    "tpic": null,
                    "hpic": null,
                    "list": null,
                    "password": null
                },
                "gradeList": [{
                    "id": 1,
                    "gname": "1602A",
                    "gscore": 100430,
                    "ginit": 2500,
                    "gcount": 25,
                    "gstatus": "1",
                    "createTime": null,
                    "updateTime": "2017-03-06 18:01:52",
                    "teacher": "苗林超",
                    "header": "胡乃全",
                    "course": "PS ",
                    "officeType": "1",
                    "officeName": "WEB教研室",
                    "tpic": null,
                    "hpic": null,
                    "list": null,
                    "password": null
                }, {
                    "id": 4,
                    "gname": "1508A",
                    "gscore": 100000,
                    "ginit": 100000,
                    "gcount": null,
                    "gstatus": null,
                    "createTime": "2017-01-16 14:51:55",
                    "updateTime": "2017-01-16 14:51:55",
                    "teacher": null,
                    "header": null,
                    "course": "xxx",
                    "officeType": "1",
                    "officeName": "WEB教研室",
                    "tpic": null,
                    "hpic": null,
                    "list": null,
                    "password": null
                }, {
                    "id": 20,
                    "gname": "1507B",
                    "gscore": 10000,
                    "ginit": 10000,
                    "gcount": null,
                    "gstatus": "2",
                    "createTime": null,
                    "updateTime": "2017-03-06 17:07:16",
                    "teacher": "东宝宝",
                    "header": "胡乃全",
                    "course": "Socket",
                    "officeType": "1",
                    "officeName": "WEB教研室",
                    "tpic": null,
                    "hpic": null,
                    "list": null,
                    "password": null
                }],
                "period": {
                    "id": 2,
                    "name": "第二教学周期",
                    "year": 2017,
                    "type": 1,
                    "startDate": "2017-03-09",
                    "endDate": "2017-04-09"
                }
            },
           //学生索引，确定哪一个学生
            index: 0,
            //控制弹出框
            showMask: false
        }
    }

    render() {
        return (
            <div style={{height:"100%"}}>
                <Mask showMask={this.state.showMask}
                      cancelMask={this.cancelMask}//2
                      changeScore={this.changeScore}
                />
                <Head grade={{...this.state.data.grade,...this.state.data.period}}
                      courseList={this.state.data.courseList}
                />
                <Content student={this.state.data.students[this.state.index]}
                         rewards={this.state.data.rewards}
                         showMask={this.showMask}
                />
                <LeftSelect students={this.state.data.students}
                         clickedStudent={this.state.index}
                         changeIndex={this.changeIndex}
                />

            </div>
        );
    }

    changeIndex(index) {
        // console.log(index)
        this.setState({
            index: index
        })
    }

    showMask(obj) {
        console.log(obj)//showMask函数中获取的是当前点击对象(object)
        this.setState({
            showMask: obj
        })
    }

    //点击mask取消,cancleMask由此向上穿送到点击事件
    cancelMask() {//
        this.setState({
            showMask: false
        })
    }

    changeScore(obj) {
        let data = this.state.data;
        data.students[this.state.index].score += obj.score;
        this.setState({
            data: data,
            showMask:false
        })
    }
}
export default Container;
