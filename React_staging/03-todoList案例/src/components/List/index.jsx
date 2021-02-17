import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
import PropTypes from 'prop-types'
export default class index extends Component {
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo:PropTypes.func.isRequired
    }
    render() {
        const { todos,updateTodo,deleteTodo } = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item todo = {todo} key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
