import React, { Component } from 'react'
import './index.css'
// //创建Context对象
const MyContext = React.createContext()
const { Provider,Consumer } = MyContext;

export default class A extends Component {
	state = {username:'tom',age:18}
    render() {
		const {username,age} = this.state
        return (
            <div className="classA">
                <h1>我是A组件{username}</h1>
                <h1>姓名:{age}</h1>
                <Provider value={this.state}>
                    <B/>
                </Provider>
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className="classB">
                <h2>我是B组件</h2>
                <C/>
            </div>
        )
    }
}
class C extends Component {
    static contextType = MyContext  // 声明接收context
    render() {
        console.log('C---:',this.context);
        return (
            <div className="classC">
                <h3>我是C组件</h3>
                <div>我是C组件接收的内容
                    <h4>姓名:{this.context.username}</h4>
                    <h4>年龄:{this.context.age}</h4>
                </div>
                <D/>
            </div>
        )
    }
}
// class D extends Component {
//     static contextType = MyContext  // 声明接收context
//     render() {
//         console.log('D---:',this.context);
//         return (
//             <div className="classD">
//                 <h4>我是D组件</h4>
//                 <div>我是D组件接收的内容
//                    <h4>姓名:{this.context.username}</h4>
//                     <h4>年龄:{this.context.age}</h4>
//                 </div>
//             </div>
//         )
//     }
// }

function D(){
    return (
        <div className="classD">
            <Consumer>
            {
                (value)=>{
                    return (
                        <div>
                            <h4>我是D组件</h4>
                            <div>我是D组件接收的内容
                                <h4>姓名:{value.username}</h4>
                                <h4>年龄:{value.age}</h4>
                            </div>
                        </div>
                    )
                }
            }
            </Consumer>
        </div>
    )
}