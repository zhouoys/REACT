import React, { Component } from 'react'
import './index.css'
import store from '../../redux/store.js'
import {createNormalAdd,createNormalSubtract,createAsyncAdd} from '../../redux/counter_actions'
export default class index extends Component {
    state = {carName:'奔驰CS6'}
    componentDidMount(){
    //检测redux中状态的变化，只要变化了，就调用render
    store.subscribe(()=>{
        this.setState({})
    })
    }
    //正常加法
    normalAdd = ()=>{
        let {value} = this.selectRef;
        store.dispatch(createNormalAdd(value,1000))
    }
    //正常减法
    normalSubtract = ()=>{
        let {value} = this.selectRef;
        store.dispatch(createNormalSubtract(value))
    }
    //奇数加
    oddAdd = ()=>{
        let {value} = this.selectRef;
        let counter = store.getState();
        if(counter % 2 !== 0){
            store.dispatch(createNormalAdd(value))
        }
    }
    //异步加
    asyncAdd = ()=>{
    setTimeout(()=>{
        let {value} = this.selectRef;
        store.dispatch(createAsyncAdd(value))
    },1000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
                <select className="select" ref={(e)=>{this.selectRef = e}}>
                    <option value="1" className="option">1</option>
                    <option value="2" className="option">2</option>
                    <option value="3" className="option">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.normalAdd}>+</button>&nbsp;&nbsp;
                <button onClick={this.normalSubtract}>-</button>&nbsp;&nbsp;
                <button onClick={this.oddAdd}>求和奇数加</button>&nbsp;&nbsp;
                <button onClick={this.asyncAdd}>异步加</button>&nbsp;&nbsp;
            </div>
        )
    }
}
