
import React, { Component } from 'react';
import axios  from 'axios';
export default class App extends Component {
  handleNetwork1 = ()=>{
    axios.get('http://localhost:3000/api1/students').then(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  handleNetwork2 = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(res=>{
      console.log(res);
    },err=>{
      console.log(err);
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleNetwork1}>获取学生信息</button>
        <button onClick={this.handleNetwork2}>获取汽车信息</button>
      </div>
    )
  }
}

