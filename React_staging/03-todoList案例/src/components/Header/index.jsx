import React, { Component } from 'react'
import './indedx.css'
import {nanoid} from 'nanoid'

export default class index extends Component {
    handleKeyUp = (event)=>{
        const {target,keyCode} = event;
        if(keyCode !== 13) return;
        if(target.value.trim() === ''){
            alert('输入内容不能为空');
            return
            }
        const todoObj = {id:nanoid(),behavior:target.value,done:false};
        this.props.addTodo(todoObj);
        target.value = '';
        }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp = {this.handleKeyUp} placeholder="请输入您的任务，按Enter键确认"/> 
            </div>
        )
    }
}
