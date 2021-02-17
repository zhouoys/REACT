# React应用(基于React脚手架)

## create-react-app

### react脚手架

1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目

   + 包含了所有需要的配置（语法检查、jsx编译、devServer…）

   + 下载好了所有相关的依赖

   + 可以直接运行一个简单效果

2. react提供了一个用于创建react项目的脚手架库: create-react-app

3. 项目的整体技术架构为:  react + webpack + es6 + eslint

4. 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化



### 创建项目并启动

第一步，全局安装：

```shell
npm i -g create-react-app
```

第二步，切换到想创项目的目录，使用命令：

~~~shell
create-react-app hello-react
~~~

第三步，进入项目文件夹：

```shell
cd hello-react
```

第四步，启动项目：

~~~shell
npm start
~~~



### react脚手架项目结构

```javascript
public ---- 静态资源文件夹
		favicon.icon ------ 网站页签图标
		index.html -------- 主页面
		logo192.png ------- logo图
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件
		robots.txt -------- 爬虫协议文件
src ---- 源码文件夹
		App.css -------- App组件的样式
		App.js --------- App组件
		App.test.js ---- 用于给App做测试
		index.css ------ 公共的样式(可以单独配置到public的static/css文件夹中，然后由public目录下的index.html引入，注意需要删除src目录下的index.js的引入路径)
		index.js ------- 入口文件
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
			---- 组件单元测试的文件(需要jest-dom库的支持)
```



~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- %PUBLIC_URL%代表public文件夹的路径 -->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!-- 开启理想视口，用于做移动端网页的适配 -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 用于配置浏览器页签+地址栏的颜色(仅支持安卓手机浏览器) -->
    <meta name="theme-color" content="#000000" />
    <meta name="description"content="Web site created using create-react-app"/>
    <!-- 用于支持网页添加到手机主屏幕后的图标 -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!-- 应用加壳时的配置文件 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <!-- 若浏览器不支持js，则页面展示展示标签的内容 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

~~~

**有且只有一个APP组件挂载到root容器中，其他组件都是APP组件的子组件。**

**index.js入口文件与index.html文件由webpack关联到一起。**





### 功能界面的组件化编码流程（通用）

1. 拆分组件: 拆分界面,抽取组件

2. 实现静态组件: 使用组件实现静态页面效果

3. 实现动态组件

   3.1 动态显示初始化数据

   ​	3.1.1 数据类型

   ​	3.1.2 数据名称

   ​	3.1.3 保存在哪个组件?

​     3.2 交互(从绑定事件监听开始)



## 组件的组合使用

 

## TodoList案例

1. `defaultChecked`多选`type='checkbox'中的`中初始化默认是否选中。
2. `<Item {...todo} />`,`jsx`语法中组件的传值

3. ```jsx
   //Header.jsx
   import {nanoid} from 'nanoid'
   <input onKeyUp = {this.handleKeyUp} />
   ......
   handleKeyUp(event){
       //获取事件
       const {keyCode,target} = event;
       //判断是否是回车键
       if(keyCode !== '13') return;
       if(target.value.trim() === ''){
           alert('输入内容不能为空');
           return;
       }
       //创建todo对象
       const todoObj = {id:nanoid(),behavior:target.value,done:false};
       //将todo对象传递给App.jsx
       this.props.addTodo(todoObj);
       target.value = '';
   }
   ```

4. **子组件向父组件传递状态，则父组件需利用props传递一个箭头函数给子组件，函数里面携带了需要子组件调用才可以更改的状态**

   ~~~jsx
   //App.jsx
   //addTodo用于添加一个todo，参数是todo对象
   addTodo = (todoObj)=>{
       //获取原来的todos
       const {todos} = this.state;
       //追加一个新的todo
       const newTodos = [todoObj,...todos];
       //更新todos
       this.setState({
           todos:newTodos
       })
   }
   ...
   <Header addTodo = {this.addToDo} />
   ~~~

5. ```shell
   npm install uuid (uuid库比较大,不推荐)
   yarn add nanoid(生成uuid库比较小，推荐)
   ```

   

6. 鼠标移入和移出事件

   ~~~jsx
   //Item.jsx
   state = {mouse:false}
   handleMouseMove = (flag)=>{
       return ()=>{
           this.setState({
               mouse:flag
           })   
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
                   <input type="checkbox" defaultChecked= {todo.done}/>
                   <span>{todo.behavior}</span>
               </label>
               <button className="btn btn-danger"
                   style={{display: mouse ? 'block':'none'}}
                   >删除</button>
           </li>
       )
   }
   ~~~

7. ```jsx
   //Item.jsx
       handleCheck = (id)=>{
           return (event)=>{
               this.props.updateTodo(id,event.target.checked);
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
                       <input type="checkbox" defaultChecked= {todo.done} onChange = {this.handleCheck(todo.id)}/>
                       <span>{todo.behavior}</span>
                   </label>
                   <button className="btn btn-danger"
                           style={{display: mouse ? 'block':'none'}}
                   >删除</button>
               </li>
           )
       }
   
   //App.jsx
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
       render(){
           const { todos } = this.state;
           return (
               <div className="todo-container">
                   <div className="todo-wrapper">
                       <Header addTodo = {this.addTodo}/>
                       <List todos = {todos} updateTodo={this.updateTodo}/>
                       <Footer />
                   </div>
               </div>
           )
       }
   ```

8.  **状态state在哪里，操作状态的方法就应该在哪里**。

9. ```shell
   //Header.jsx
   yarn add prop-types
   import PropTypes from 'prop-types'
   static propTypes = {
   addTodo:PropTypes.func.isRequired
   }
   //List.jsx
   import PropTypes from 'prop-types'
   static propTypes = {
   todos:PropTypes.array.isRequired,
   updateTodo:PropTypes.func.isRequired
   }
   ```

10. ~~~jsx
    
    handleDelete = (id)=>{
        if(window.confirm('确定删除吗?')){
            this.props.deleteTodo(id);
        }
    }
    <button onClick = {()=>{this.handleDelete(id)}}>删除</button>
    ~~~

11. ~~~jsx
    const doneCount = todos.reduce((pre,todo)=>pre + {todo.done ? 1:0},0);
    <input type-"checkbox" checked = {doneCount === totalCount ? true :false} onChange = {this.handleCheckedAll}
    //defaultChecked只在页面的第一次起作用
    ~~~

    

    ## todoList案例相关知识点

    ```
    1.拆分组件、实现静态组件，注意：className、style的写法
    2.动态初始化列表，如何确定将数据放在哪个组件的state中？
    ——某个组件使用：放在其自身的state中
    ——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
    3.关于父子之间通信：
    1.【父组件】给【子组件】传递数据：通过props传递
    2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
    4.注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
    5.状态在哪里，操作状态的方法就在哪里
    ```