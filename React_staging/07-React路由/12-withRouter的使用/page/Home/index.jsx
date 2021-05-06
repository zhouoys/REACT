import React, { Component } from 'react'
import {Switch,Route, Redirect} from 'react-router-dom';
import MyNavLink from '../../components/MyNavLink/index.jsx'
import Message from './Message/index.jsx';
import News from './News/index.jsx';
import './bootstrap.css'
export default class index extends Component {
    render() {
        return (
            <div>
            <h2>Home组件内容</h2>
            <div>
              <ul className="nav nav-tabs">
                <li>
                  {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                  <MyNavLink to="/home/news">News</MyNavLink>
                </li>
                <li>
                  {/* <a className="list-group-item " href="./home-message.html">Message</a> */}
                  <MyNavLink to="/home/message">Message</MyNavLink>
                </li>
              </ul>
              <Switch>
                  <Route path="/home/news" component={News}></Route>
                  <Route path="/home/message" component={Message}></Route>
                  <Redirect to="/home/news"></Redirect>
              </Switch>
            </div>
          </div>
        )
    }
}