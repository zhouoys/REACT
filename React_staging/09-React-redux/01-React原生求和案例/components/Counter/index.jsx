import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    state = {
        counter:0
    }
    //正常加法
    normalAdd = ()=>{
        let {value} = this.selectRef;
        let {counter} = this.state;
        this.setState({
            counter:Number(counter)+Number(value)
        })
    }
    //正常减法
    normalSubtract = ()=>{
        let {value} = this.selectRef;
        let {counter} = this.state;
        this.setState({counter:Number(counter)-Number(value)})
    }
    //奇数加
    oddAdd = ()=>{
        let {value} = this.selectRef;
        let {counter} = this.state;
        if(counter % 2 !== 0){
            this.setState({
                counter:Number(counter)+Number(value)
            })
        }
    }
    //异步加
    asyncAdd = ()=>{
    setTimeout(()=>{
        let {value} = this.selectRef;
        let {counter} = this.state;
        this.setState({
            counter:Number(counter)+Number(value)
        })
    },1000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.counter}</h1>
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
