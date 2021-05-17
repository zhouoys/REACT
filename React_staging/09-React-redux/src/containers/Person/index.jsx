import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {ADD_PERSON} from '../../redux/constant.js'
import {createAddPersonAction} from '../../redux/actions/person.js'
class Person extends Component {
    addPerson = ()=>{
        let name = this.nameNode.value;
        let age = this.ageNode.value;
        let person = {id:nanoid(),name,age}
        this.props[ADD_PERSON](person);
        this.ageNode.value = '';
        this.nameNode.value ='';
    }
    render() {
        return (
            <div>
                <h2>我是Person组件</h2><h2>计算的和是{this.props.count}</h2>
                <div>
                    <input type="text" name="name" placeholder='请输入姓名' ref={(node)=>this.nameNode = node}/>
                </div>
                <div>
                    <input type="number" name="age" placeholder="请输入年龄"  ref={(node)=>this.ageNode = node}/>
                </div>
                <div>
                    <button onClick={this.addPerson}>添加用户</button>
                </div>
                <div>
                    <ul>
                        {
                            this.props.personList.map((item)=>{
                                return <li key={item.id}>{item.name}--{item.age}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default connect((state)=>({
    personList:state.personList,count:state.count
}),{
    [ADD_PERSON]:createAddPersonAction
})(Person)