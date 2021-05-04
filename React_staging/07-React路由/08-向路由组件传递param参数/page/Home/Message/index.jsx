import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Detail from './Detail/index.jsx';
export default class index extends Component {
  state = {
    detailArray:[
      {id:'01',title:'故宫'},
      {id:'02',title:'天坛'},
      {id:'03',title:'圆明园'},
    ]
  }
    render() {
      const {detailArray} = this.state;
        return (
        <div>
            <ul>
              {
                detailArray.map(item=>{
                  return (
                  <li key={item.id}>
                    {/* 向路由组件传递params参数 */}
                    <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                  </li>)
                })
              }
            </ul>
            {/* 声明接收params参数 */}
            <Route path='/home/message/detail/:id/:title' component={Detail}></Route>
        </div>
        )
    }
}
