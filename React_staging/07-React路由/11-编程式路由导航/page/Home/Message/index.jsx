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
  pushShow = (id,title)=>{
    //push跳转+传递params参数
    //this.props.history.push(`/home/message/detail/${id}/${title}`);
    //push跳转+传递search参数
    //this.props.history.push(`/home/message/detail?id=${id}&${title}`);
    //push跳转+传递state参数
    this.props.history.push('/home/message/detail',{id,title})
  }
  replaceShow = (id,title)=>{
    //replace跳转+传递params参数
    //this.props.history.replace(`/home/message/detail/${id}/${title}`);
    //replace跳转+传递search参数
    //this.props.history.replace(`/home/message/detail?id=${id}&${title}`);
    //push跳转+传递state参数
    this.props.history.replace('/home/message/detail',{id,title})
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
                  {/* <Link to={{pathname:`/home/message/detail/${item.id}/${item.title}`}}>{item.title}</Link> &nbsp;&nbsp; */}
                  {/* 向路由组件传递search参数,注意该模式下to的值无法使用对象形式 */}
                  {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> &nbsp;&nbsp; */}
                  {/* 向路由组件传递state参数 */}
                  <Link to={{pathname:`/home/message/detail`,state:{id:item.id,title:item.title}}}>{item.title}</Link> &nbsp;&nbsp;
                  {/* params编程式导航 */}
                  <button onClick = {()=>{this.pushShow(item.id,item.title)}}>push路由</button>&nbsp;&nbsp;
                  <button onClick = {()=>{this.replaceShow(item.id,item.title)}}>replace路由</button>
                </li>)
              })
            }
          </ul>
          {/*路由注册接收params参数 */}
          {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}
          {/*路由注册接收search参数 */}
          {/* <Route path="/home/message/detail" component={Detail}></Route> */}
          {/*路由注册接收state参数 */}
          <Route path="/home/message/detail" component={Detail}></Route>
      </div>
      )
  }
}
