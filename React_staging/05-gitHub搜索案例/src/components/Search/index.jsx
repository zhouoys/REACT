import React, { Component } from 'react'
import axios from 'axios'

export default class search extends Component {
  search = ()=>{
    const { ref_searchInput:{ value:keyValue } } = this;//连续结构赋值+重命名；
    console.log('search--key:'+keyValue);
    this.props.updateState({isFirst:false,isLoading:true})
    // axios.get(`https://api.github.com/search/users?q=${keyValue}`).then(res=>{ //直接发github，后端利用了cors技术实现跨域
      axios.get(`http://localhost:3000/zw1/search/users?q=${keyValue}`).then( res=>{ //利用本地的中间服务器实现转发
      console.log(res);
      this.props.updateState({isLoading:false,userList:res.data.items})
    }).catch(err=>{
      console.log(err);
      this.props.updateState({isLoading:false,errMsg:err.message})
    })
  }
    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input type="text" ref={element => this.ref_searchInput = element } placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>Search</button>
            </div>
          </section>
        )
    }
}
