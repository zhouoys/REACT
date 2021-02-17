import React,{ Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css'
class App extends Component{
    state = {todos:[
    {id:'001',behavior:'吃饭',done:true},
    {id:'002',behavior:'睡觉',done:false},
    {id:'003',behavior:'敲代码',done:true},
    {id:'004',behavior:'逛街',done:false}]}
    addTodo = (todoObj)=>{
        const {todos} = this.state;
        const newTodos = [todoObj,...todos];
        this.setState({
            todos:newTodos
        })
    }
    updateTodo = (id,done)=>{
        const {todos} = this.state;
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id){
                todoObj.done = done;
            }
            return todoObj;

        });
        this.setState({todos:newTodos});
    }
    deleteTodo = (id)=>{
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id;
        });
        this.setState({todos: newTodos})
    }
    checkedAllTodo = (done)=>{
        const {todos} = this.state;
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done};
        })
        this.setState({todos:newTodos})
    }
    cleartodoDone = ()=>{
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done;
        })
        this.setState({todos:newTodos});
    }
    render(){
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrapper">
                    <Header addTodo = {this.addTodo}/>
                    <List todos = {todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos = {todos} checkedAllTodo={this.checkedAllTodo} cleartodoDone={this.cleartodoDone}/>
                </div>
            </div>
        )
    }
}
export default App;