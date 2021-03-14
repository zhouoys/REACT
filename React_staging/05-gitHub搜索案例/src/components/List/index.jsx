import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {
    render() {
        let {userList,isFirst,isLoading,errMsg } = this.props;
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
