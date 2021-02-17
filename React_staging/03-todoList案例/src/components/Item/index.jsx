import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    state = {mouse:false}
    handleMouseMove = (flag)=>{
        return ()=>{
         this.setState({
             mouse:flag
         })   
        }
    }
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked);
        }
    }
    handleDelete = (id)=>{
        if(window.confirm('确定删除么？')){
            this.props.deleteTodo(id);
        }
    }
    render() {
        const { todo } = this.props;
        const { mouse } = this.state;
        return (
            <li onMouseEnter = {this.handleMouseMove(true)} 
                onMouseLeave = {this.handleMouseMove(false)}
                style = {{backgroundColor: mouse ? 'skyblue':''}}
            >
                <label>
                    <input type="checkbox" checked= {todo.done} onChange = {this.handleCheck(todo.id)}/>
                    <span>{todo.behavior}</span>
                </label>
                <button className="btn btn-danger" onClick = {()=>this.handleDelete(todo.id)}
                        style={{display: mouse ? 'block':'none'}}
                >删除</button>
            </li>
        )
    }
}
