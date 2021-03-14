import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class search extends Component {
  search = async ()=>{
    const { ref_searchInput:{ value:keyValue } } = this;//连续结构赋值+重命名；
    console.log('search--key:'+keyValue);
    //采用xhr-axios
    //#region 
    // this.props.updateState({isFirst:false,isLoading:true})
    PubSub.publish('zw',{isFirst:false,isLoading:true})
    // axios.get(`https://api.github.com/search/users?q=${keyValue}`).then(res=>{ //直接发github，后端利用了cors技术实现跨域
    //   axios.get(`http://localhost:3000/zw1/search/users?q=${keyValue}`).then( res=>{ //利用本地的中间服务器实现转发
    //   console.log(res);
    //   // this.props.updateState({isLoading:false,userList:res.data.items})
    //   PubSub.publish('zw',{isLoading:false,userList:res.data.items})
    // }).catch(err=>{
    //   console.log(err);
    //   // this.props.updateState({isLoading:false,errMsg:err.message})
    //   PubSub.publish('zw',{isLoading:false,errMsg:err.message})
    // })
    // #endregion
    //采用fetch-未优化
    //#region 
    // fetch(`http://localhost:3000/zw1/search/users?q=${keyValue}`).then(resonse=>{
    //   console.log('联系服务器请求成功了==>',resonse);
    //   return resonse.json();
    // },err=>{
    //   console.log('联系服务器请求失败了==>',err);
    //   return new Promise(()=>{});//阻断promise继续向下传播到下一个then的err中
    // }).then(res=>{
    //   console.log('获取数据成功了==>',res);
    //   PubSub.publish('zw',{isLoading:false,userList:res.items})
    // },err=>{
    //   console.log('获取数据失败了==>',err);
    // })
    //#endregion
    //采用fetch-优化-catch穿透
    //#region
    // fetch(`http://localhost:3000/zw1/search/users?q=${keyValue}`).then(resonse=>{
    //   console.log('联系服务器请求成功了==>',resonse);
    //   return resonse.json();
    // }).then(res=>{
    //   console.log('获取数据成功了==>',res);
    //   PubSub.publish('zw',{isLoading:false,userList:res.items})
    // }).catch(err=>{
    //   console.log('请求报错==>',err);
    // })
    //#endregion
    //采用fetch-优化-异步函数
    try{
      let response = await fetch(`http://localhost:3000/zw1/search/users?q=${keyValue}`);
      let data = await response.json();
      console.log('返回的数据==>',data);
      PubSub.publish('zw',{isLoading:false,userList:data.items})
    }catch(err){
      console.log('请求报错==>',err);
    }
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
