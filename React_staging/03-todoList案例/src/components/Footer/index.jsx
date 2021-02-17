import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    handleCheckAll = (enent)=>{
        this.props.checkedAllTodo(enent.target.checked);
    }
    clearDone = ()=>{
        this.props.cleartodoDone()
    }
    render() {
        const { todos } = this.props;
        const totalCount = todos.length;
        const doneCount = todos.reduce((pre,item) =>{ return pre + (item.done ? 1 : 0)},0);
        return (
            <div className="todo-footer">
                <div>
                    <label>
                        <input type="checkbox" checked = { totalCount === doneCount && totalCount !==0 } onChange={this.handleCheckAll}/>
                    </label>
                    <span>已完成{doneCount}/全部{totalCount}</span>
                </div>
                <button className="btn btn-danger" onClick={ this.clearDone }>清除已完成项目</button>
            </div>
        )
    }
}
