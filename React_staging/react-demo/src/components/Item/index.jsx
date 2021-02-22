import React, { Component } from 'react';
import './index.css'
export default class Item extends Component {
    render() {
        return (
            <div className="card">
              <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
                <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width:'100px'}} alt="avator"/>
              </a>
              <p className="card-text">reactjs</p>
            </div>
        )
    }
}
