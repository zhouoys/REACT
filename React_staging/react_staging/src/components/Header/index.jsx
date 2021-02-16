import React, { Component } from 'react'
import './indedx.css'

export default class index extends Component {
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入您的任务，按Enter键确认"/> 
            </div>
        )
    }
}
