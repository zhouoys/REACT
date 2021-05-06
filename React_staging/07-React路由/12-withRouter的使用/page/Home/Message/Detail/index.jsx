import React, { Component } from 'react'
import qs from 'querystring'

export default class index extends Component {
    state = {
        detail:[
            {id:'01',comment:'故宫是一座宫殿'},
            {id:'02',comment:'天坛是一座祭坛'},
            {id:'03',comment:'圆明园是一座花园'},
        ]
    }
    goBack = ()=>{
        this.props.history.goBack();
    }
    goForward =()=>{
        this.props.history.goForward();
    }
    go = ()=>{
        this.props.history.go(2);
    }
    render() {
        console.log('------',this.props);
        //接收路由跳转传递的params参数
        // let {id,title} = this.props.match.params;
        //接收路由跳转传递的search参数
        // let value = qs.parse(this.props.location.search.slice(1));
        // let {id,title} = value;
        //接收路由跳转传递的state参数
        let {id,title} = this.props.location.state;
        let detail = this.state.detail.find(item=>{
            return item.id === id;
        });
        console.log(detail);
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>COMMENT:{detail && detail.comment}</li>
                </ul>
                <button onClick={this.goBack}>上一步</button>&nbsp;&nbsp;
                <button onClick={this.goForward}>下一步</button>&nbsp;&nbsp;
                <button onClick={this.go}>跳转</button>&nbsp;&nbsp;
            </div>
        )
    }
}