import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <ul className="todo-main">
                <Item />
            </ul>
        )
    }
}
