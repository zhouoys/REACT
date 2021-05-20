import React, { Component } from 'react'

export default class index extends Component {
    state = {count:0}
    add = ()=>{
        //setState方法一:对象式
        // let {count} = this.state;
        //setState更新状态为异步更新，也就是先执行console.log('状态为:',this.state.count);
        //setState方法是同步的，但是调用它所导致的行为却是异步的;
        //this.setState({count:count+1},()=>{console.log('回调函数:',this.state.count);});
        //console.log('状态为:',this.state.count);

        //setState方法二:函数式
        this.setState((state,props)=>{return { count:state.count+1}},()=>{console.log('回调函数:',this.state.count)})
    }
    render() {
        return (
            <div>
                <h1>总共:{this.state.count}</h1>
                <button onClick={this.add}>点击加1</button>
            </div>
        )
    }
}
