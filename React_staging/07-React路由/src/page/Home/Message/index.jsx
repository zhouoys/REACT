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
                    {/* 向路由组件传递state参数 */}
                    <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                  </li>)
                })
              }
            </ul>
            {/*state参数无需声明接收 */}
            <Route path='/home/message/detail' component={Detail}/>
        </div>
        )
    }
}
