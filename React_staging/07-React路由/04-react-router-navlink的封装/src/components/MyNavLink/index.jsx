import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
export default class index extends Component {
    render() {
        console.log(this.props);
        return (
            <NavLink activeClassName="nav_active" className="list-group-item" {...this.props}>hhaha</NavLink>
        )
    }
}
