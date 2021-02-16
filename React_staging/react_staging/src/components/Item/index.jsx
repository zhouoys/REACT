import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    render() {
        return (
            <li>
                <label>
                    <input type="checkbox" />
                    <span>我要写代码</span>
                </label>
                <button className="btn btn-danger">删除</button>
            </li>
        )
    }
}
