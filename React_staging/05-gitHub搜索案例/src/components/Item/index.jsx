import React, { Component } from 'react';
import './index.css'
export default class Item extends Component {
    render() {
      const { item } = this.props;
        return (
            <div className="card">
              <a href={item.html_url} target="_blank" rel="noreferrer">
                <img src={item.avatar_url} style={{width:'100px'}} alt="avator"/>
              </a>
              <p className="card-text">{item.login}</p>
            </div>
        )
    }
}
