import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {
    state = {
        userList:[],//保存用户数据
        isFirst:true,//是否是第一次进入
        isLoading:false,//是否是在加载中
        errMsg:''//错误信息
    }
    componentDidMount(){
        this.token = PubSub.subscribe('zw',(_,data)=>{
            console.log('订阅接收的参数1',_);
            console.log('订阅接收的参数2',data);
            this.setState(data);
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
    }
    render() {
        let {userList,isFirst,isLoading,errMsg } = this.state;
        return (
            <div className="row">
            {
            isFirst ? <h2>请输入您的搜索内容</h2> : isLoading ? <h2>Loading。。。</h2> : errMsg ? <h2>{errMsg}</h2> :
            userList.map(item=>{
                return  <Item item = {item} key={item.id}/>
                })
            }
          </div>
        )
    }
}
