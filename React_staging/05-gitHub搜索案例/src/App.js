import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
  state = {
    userList:[],//保存用户数据
    isFirst:true,//是否是第一次进入
    isLoading:false,//是否是在加载中
    errMsg:''//错误信息
  }
  //更新App的state
  updateState = (datas)=>{
    this.setState(datas)
  }
  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
    </div>
    )
  }
}