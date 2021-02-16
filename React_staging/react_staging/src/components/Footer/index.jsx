import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className="todo-footer">
                <div>
                    <label>
                        <input type="checkbox" />
                    </label>
                    <span>已完成2/全部4</span>
                </div>
                <button className="btn btn-danger">清除已完成项目</button>
            </div>
        )
    }
}
