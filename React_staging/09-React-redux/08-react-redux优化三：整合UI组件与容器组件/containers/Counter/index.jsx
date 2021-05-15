import React, { Component } from 'react'
import './index.css'
import {NORMALADD,NORMALSUBTRACT,ASYNCADD} from '../../redux/counter_store.js'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
////引入action
import {createNormalAdd,createNormalSubtract,createAsyncAdd} from '../../redux/counter_actions'
class Index extends Component {
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

// function mapStateToProps (state){
//     return {
//         count:state
//     }
// }
// function mapDispatchToProps (dispatch){
//     return {
//         [NORMALADD]:(value)=> {dispatch(createNormalAdd(value*1))},
//         [NORMALSUBTRACT]:(value)=>dispatch(createNormalSubtract(value*1)),
//         [ASYNCADD]:(value,time)=>dispatch(createAsyncAdd(value*1,time))
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(CounterUI);
//mapDispatchToProps的简写
export default connect(state=>({count:state}),{
    [NORMALADD]:createNormalAdd,
    [NORMALSUBTRACT]:createNormalSubtract,
    [ASYNCADD]:createAsyncAdd
})(Index);


