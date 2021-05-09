import React, { Component } from 'react'
import './index.css'
import {NORMALADD,NORMALSUBTRACT,ASYNCADD} from '../../redux/counter_store.js'
export default class index extends Component {
    state = {carName:'奔驰CS6'}
    //正常加法
    normalAdd = ()=>{
        let {value} = this.selectRef;
        console.log('--',value);
       (this.props[NORMALADD])(value);
    }
    //正常减法
    normalSubtract = ()=>{
        let {value} = this.selectRef;
        this.props[NORMALSUBTRACT](value);

    }
    //奇数加
    oddAdd = ()=>{
        let {value} = this.selectRef;
        if(this.props.count%2 !== 0){
            this.props[NORMALADD](value);
        }
    }
    //异步加
    asyncAdd = ()=>{
        let {value} = this.selectRef;
        this.props[ASYNCADD](value,500);
    }
    render() {
        console.log('Counter.jsx-UI组件',this.props);
        return (
            <div>
                <h1>当前求和为:{this.props.count}</h1>
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
