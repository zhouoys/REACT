# **一** 对SPA应用的理解

## 1.1 SPA的理解

1. 单页Web应用（single page web application，SPA）。

2. 整个应用只有**一个完整的页面**。

3. 点击页面中的链接**不会刷新**页面，只会做页面的**局部更新。**

4. 数据都需要通过ajax请求获取, 并在前端异步展现。



# 二 React路由

    ## 2.1 路由的理解

1. 一个路由就是一个映射关系(key:value)

2. key为路径, value可能是function或component                 

## 2.2 路由的分类

### 2.2.1 后端路由

1. 理解： value是function, 用来处理客户端提交的请求。

2. 注册路由： router.get(path, function(req, res))

3. 工作过程：当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据

### 2.2.2 前端路由

1. 浏览器端路由，value是component，用于展示页面内容。

2. 注册路由: 

   ```html
   <Route path="/test" component={Test}>
   ```

3. 工作过程：当浏览器的path变为/test时, 当前路由组件就会变为Test组件。

### 2.2.3 前端路由原理

```html
<body>
    <div>
        <!-- 为何必须要采用return 方法，才能阻止a标签跳转到href页面-->
        <a href="https://www.baidu.com" onclick="return handle('hello world')">push Test</a>
        <!-- return 用来阻止a标签跳转 -->
        <a href="https://www.baidu.com" onclick="return push('/test1')">push Test1</a>
        <button onClick="push('/test2')">push test2</button><br><br>
        <button onClick="replace('/test3')">replace test3</button><br><br>
        <button onClick="back()">&lt;= 回退</button>
        <button onClick="forword()">前进 =&gt;</button>
    </div>
</body>
<script type="text/javascript" src="https://cdn.bootcss.com/history/4.7.2/history.js"></script>
<script>
    // 获取history对象
    // let history = History.createBrowserHistory() //方法一，直接使用H5推出的history身上的API(有可能存在兼容性问题).
    let history = History.createHashHistory(); //方法二，hash值(描点)兼容性极好.
    function push(value) {
        history.push(value);
        return false;
    }
    function replace(value){
        history.replace(value) //会直接替换最顶层的页面，是更新最顶层页面，而不是又压一层进去
    }
    function back(){
        history.goback();
    }
    function forward(){
        history.goForward();
    }
    // path监听
    history.listen((value) => {
        console.log("请求路由路径变化了==>", value);
    });
    // a标签跳转
    function handle(value){
        console.log(value);
        return false;
    };
</script>
```





## 2.3 React路由的基本使用

###  2.3.1 react-router的理解

1. react的一个插件库。

2. 专门用来实现一个SPA应用。

3. 基于react的项目基本都会用到此库。

`react-router`库是`react`专门用来实现路由的，只是这个库下还有三种具体实现方式，分别给三种平台去使用 

1. web平台 -- `react-router-dom`。

2. native移动端开发平台。

3. anywhere兼容web，native通用。

   这里我们只讲`react-router-dom`,也就是`PC`平台使用路由。此处的`dom`特意就是代表`PC`端的`DOM`

   路由器-->`Router`,路由-->`Route`,多个路由`Route`由一个路由器`Router`来管理



### 2.3.2 官方文档

[印记中文](https://docschina.org/)

[react-router](https://react-router.docschina.org/)



### 2.3.3 安装

```shell
yarn add react-router-dom
npm install --save react-router-dom
```



### 2.3.4 Link演示一个基本路由器配置

~~~jsx
import "./App.css";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/index";
import About from "./components/About/index";
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      {/* 路由器Router一般放在index.jsx里面,这样所有的组件就共用一个Router了 */}
      {/* <BrowserRouter> */}
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生HTML中,依靠a标签跳转不同的页面 */}
              {/* <a class="list-group-item" href="./about.html">About</a><a class="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中依靠路由连接切换组件,编写路由链接. Link为一个组件,Router又分为BrowserRouter和HashRoueter,此处嵌套的Router也需要明确指出到
          底使用哪一种前端路由方式 */}
              {/* <BrowserRouter> */}
              <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link>
              {/* </BrowserRouter> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                  {/* 注册路由,注意页面上只允许有一个路由器来管理,也就是只能有一个Router,多个Router没有效果*/}
                  {/* <BrowserRouter> */}
                  <Route path="/about" component={ About }/>
                  <Route path="/home" component={ Home }/>
                  {/* </BrowserRouter> */}
              </div>
            </div>
          </div>
        </div>
      {/* </BrowserRouter> */}
    </div>
  );
}
export default App;
~~~



### 2.3.5 小结

```html
1.明确好界面中的导航区、展示区
2.导航区的a标签改为Link标签
  <Link to="/xxxxx">Demo</Link>
3.展示区写Route标签进行路径的匹配
  <Route path='/xxxx' component={Demo}/>
4.<App>的最外侧包裹了一个<BrowserRouter>或者<HashRouter>
```

采用`<HashRouter/>`组件，`URL`地址中将出现一个`#`号，后面的内容都不会发送到服务器，而是默认作为前端资源。



## 2.4 **一般组件和路由组件的区别**

**一般组件和路由组件的区别**

1. 写法不同：一般组件引用。(直接引入，直接使用)

   ~~~jsx
   import Home from '/components/Home.jsx';
   function App(){
       return (
           ......
           <Home/>
           ......
       )
   }
   export default App;
   ~~~

2. 写法不同：路由组件使用。(直接引入，通过路由Link，Route来渲染展示的组件)

   ```jsx
   import Home from '/components/Home.jsx';
   import { Link, Route } from "react-router-dom";
   function App(){
       return (
           ......
           <Link className="list-group-item" to="/home">Home</Link>
           <Route path="/home" component={ Home }/>
           ......
       )
   }
   export default App;
   ```

3. 存放位置不同：路由组件`About`和`Home`组件一般不放在`components`文件夹里面，而是单独放在与`components`平级的`pages`目录里面。

4. 接收到的props不同：路由组件`About`和`Home`与一般组件最大的区别在于

   + 一般组件通过`props`可以接收一些值，如果什么都没有传，则接收`{}`空对象。

   + 路由组件，即使你什么都没有传，它默认也会接收到三个固定的属性。因为可以知道路由组件是由`Route`路由器组件来渲染的，它在渲染对应的路由组件的时候，会向该组件传递一些参数，其中最重要的有三个属性`history`,`location`,`match`。

     ```
     history:
         go: ƒ go(n)
         goBack: ƒ goBack()
         goForward: ƒ goForward()
         push: ƒ push(path, state)
         replace: ƒ replace(path, state)
     location:
         pathname: "/about"
         search: ""
         state: undefined
     match:
         params: {}
         path: "/about"
         url: "/about"
     ```

     ![image-20210411225124737](image/image-20210411225124737.png)


## 2.5 NavLink组件

该组件可以给配置的路由点击的时候设置样式`.active`.该样式为默认样式，可以采用`activeClassName`自定义点击时候的样式

**App.js**

```jsx
import './App.css'
<NavLink to="about" activeClassName="nav_active" className="list-group-item" >About</NavLink>
<NavLink to="home"  activeClassName="nav_active" className="list-group-item" >home</NavLink>
```

**App.css**

~~~css
.nav_active{
    background-color: aqua !important;
    color:white !important;
}
~~~

也可以在`public/index.html`里面单独设置,这样全局共享

~~~html
<style>
    .nav_active{
    background-color: aqua !important;
    color:white !important;
}
</style>
~~~



### 2.5.1封装NavLink组件

封装`NavLink`为`MyNavLink`组件，减少代码，重复利用。

**App.js**

~~~jsx
import MyNavLink from './components/MyNavLink/index.jsx'
function App() {
  return (
    <div>
          ......
          <MyNavLink to="/about" a={1} b={2} c={3}>About</MyNavLink>
          <MyNavLink to="/home">Home</MyNavLink>
          ......
        </div>
    </div>
  );
}
~~~

**MyNavLink.jsx**

~~~javascript
export default class index extends Component {
    render() {
        console.log(this.props);
        return (
            <NavLink activeClassName="nav_active" className="list-group-item" {...this.props}/>
        )
    }
}
~~~

当组件的文本节点为空的时候，其内容节点一般采用`children`中的内容，同时父组件在上送数据的时候，其内容节点也会默认被视作`children`的内容传递给子组件。

![image-20210424221923630](image/image-20210424221923630.png)

**总结：**

1. NavLink可以实现路由链接的高亮。通过`activeClassName`指定样式名。
2. 标签体内容(内容节点)是一个特殊的标签属性。
3. 通过`this.props.children`可以获取标签体内容。



## 2.6 switch组件

该组件用来解决当`Route`组件与路径匹配之后，不会终止匹配流程的问题。

~~~jsx
import {Route,Switch} from 'react-router-dom'
......
<switch>
    <Route path='/about' component={About}/>
    <Route path='/home' component={Home}/>
    <Route path='/home' component={Test}/>
    <Route path='/home' component={Home}/>
</switch>
~~~

**总结**

1. 通常情况下，path和component是一一对应的关系。
2. Switch可以提高路由匹配效率（单一匹配）。



## 2.7 样式丢失问题

当`path`采用多级解构`/zw/about`的时候，点击了选项卡并重新刷新页面，此时`css`加载异常。

1. 在`public/index.html`中引入css文件，去掉`.`

   ![image-20210504161932439](image/image-20210504161932439.png)

  2.采用`%PUBLIC_URL%`,此处表示`public`下的绝对路径，也就是脚手架自带的服务器`http://localhost:3000`下的根路径

![image-20210504162321449](image/image-20210504162321449.png)

3.采用`HashRouter`代替`BrowserRouter`。

**HashRouter**模式携带有`#`,其后的内容都认为是前端的URL资源，都将不会带给后端服务器。





## 2.8 路由的严格匹配和模糊匹配



1. 模糊匹配，默认。顺序不能打乱。

   ![image-20210504165705655](image/image-20210504165705655.png)



2. 精准匹配，`exact={true}`



![image-20210504170208727](image/image-20210504170208727.png)

​			单独一个`exact`也可以

![image-20210504170352823](image/image-20210504170352823.png)

<font color="red">如果页面可以正常渲染展示，则不必开启严格模式，否则会出问题</font>

**总结:**

1. 默认使用的是模糊匹配(简单记:[输入的路径]必须包含要[匹配的路径])。

2. 开启严格匹配:

   ```jsx
   <Router exact={true} path="/about" component={About}></Router>
   ```

3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由



## 2.9 Redirect的使用

`redirect`为重定向，当路由没有任何匹配的时候，采用重定向的配置。

~~~jsx
import {Route,Switch,Redirect} from 'react-router-dom'
......
<switch>
    <Route path='/about' component={About}/>
    <Route path='/home' component={Home}/>
    <Redirect to="/about"></Redirect>
</switch>
~~~

一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由。



## 2.10 嵌套路由

**Home.jsx**

~~~jsx
import React, { Component } from 'react'
import {Switch,Route, Redirect} from 'react-router-dom';
import MyNavLink from '../../components/MyNavLink/index.jsx'
import Message from './Message/index.jsx';
import News from './News/index.jsx';
import './bootstrap.css'
export default class index extends Component {
    render() {
        return (
            <div>
            <h2>Home组件内容</h2>
            <div>
              <ul className="nav nav-tabs">
                <li>
                  {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                  <MyNavLink to="/home/news">News</MyNavLink>
                </li>
                <li>
                  {/* <a className="list-group-item " href="./home-message.html">Message</a> */}
                  <MyNavLink to="/home/message">Message</MyNavLink>
                </li>
              </ul>
              <Switch>
                  <Route path="/home/news" component={News}></Route>
                  <Route path="/home/message" component={Message}></Route>
                  <Redirect to="/home/news"></Redirect>
              </Switch>
            </div>
          </div>
        )
    }
}
~~~

**Message.jsx**

~~~javascript
import React, { Component } from 'react'
export default class index extends Component {
    render() {
        return (
        <div>
            <ul>
              <li>
                <a href="/message1">message001</a>&nbsp;&nbsp;
              </li>
              <li>
                <a href="/message2">message002</a>&nbsp;&nbsp;
              </li>
              <li>
                <a href="/message/3">message003</a>&nbsp;&nbsp;
              </li>
            </ul>
        </div>
        )
    }
}
~~~

**News.jsx**

~~~jsx
import React, { Component } from 'react'
export default class index extends Component {
    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        )
    }
}
~~~



**总结:**

1. 注册子路由时要写父路由的path值。
2. 路由的匹配是按照注册路由的顺序进行的。



## 2.11 向路由组件传递param参数

**ajax传递参数方式**

1. query。

2. params。

3. body。

   + urlencode
   + json

   **Message.jsx**

   ![image-20210504221243112](image/image-20210504221243112.png)



**Detail.jsx**

![image-20210504221755024](image/image-20210504221755024.png)





**Message.jsx**

~~~jsx
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Detail from './Detail/index.jsx';
export default class index extends Component {
  state = {
    detailArray:[
      {id:'01',title:'故宫'},
      {id:'02',title:'天坛'},
      {id:'03',title:'圆明园'},
    ]
  }
    render() {
      const {detailArray} = this.state;
        return (
        <div>
            <ul>
              {
                detailArray.map(item=>{
                  return (
                  <li key={item.id}>
                    {/* 向路由组件传递params参数 */}
                    <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
                  </li>)
                })
              }
            </ul>
            {/* 声明接收params参数 */}
            <Route path='/home/message/detail/:id/:title' component={Detail}></Route>
        </div>
        )
    }
}

~~~

**Detail.jsx**

~~~jsx
import React, { Component } from 'react'
export default class index extends Component {
    state = {
        detail:[
            {id:'01',comment:'故宫是一座宫殿'},
            {id:'02',comment:'天坛是一座祭坛'},
            {id:'03',comment:'圆明园是一座花园'},
        ]
    }
    render() {
        console.log(this.props);
        let {id,title} = this.props.match.params;
        console.log(this.state);
        let detail = this.state.detail.find(item=>{
            return item.id === id;
        })
        console.log(detail);
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>COMMENT:{detail.comment}</li>
                </ul>
            </div>
        )
    }
}
~~~



**总结:**

1. params参数

   路由链接(携带参数):

   ```jsx
   <Link to='/demo/test/tom/18'>详情</Link>
   ```

   注册路由(声明接收)

   ```jsx
   <Route path="/demo/test/:name/:age" component="Test"></Route>
   ```

   接收参数

   ```jsx
   const {id,title} = this.props.match.params
   ```

   

## 2.12 向路由组件传递search参数



**Message.jsx**

![image-20210504231702102](image/image-20210504231702102.png)



**Detail.jsx**

![image-20210504232450402](image/image-20210504232450402.png)

![image-20210504231959891](image/image-20210504231959891.png)

~~~jsx
import qs from 'querystring';
let obj = {name:'tom',age:18}; 
console.log(qs.stringify(obj));// name="tom"&age=18 key=value&key=value
let str = "carName=奔驰&price=199";
console.log(qs.parse(str));//{carNaeme:'奔驰',price:199}
~~~



![image-20210504232543813](image/image-20210504232543813.png)



**Message.jsx**

~~~jsx
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Detail from './Detail/index.jsx';
export default class index extends Component {
  state = {
    detailArray:[
      {id:'01',title:'故宫'},
      {id:'02',title:'天坛'},
      {id:'03',title:'圆明园'},
    ]
  }
    render() {
      const {detailArray} = this.state;
        return (
        <div>
            <ul>
              {
                detailArray.map(item=>{
                  return (
                  <li key={item.id}>
                    {/* 向路由组件传递search参数 */}
                    <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
                  </li>)
                })
              }
            </ul>
            {/*search参数无需声明接收 */}
            <Route path='/home/message/detail' component={Detail}/>
        </div>
        )
    }
}

~~~



**Detail.jsx**

~~~jsx
import React, { Component } from 'react'
import qs from 'querystring';

export default class index extends Component {
    state = {
        detail:[
            {id:'01',comment:'故宫是一座宫殿'},
            {id:'02',comment:'天坛是一座祭坛'},
            {id:'03',comment:'圆明园是一座花园'},
        ]
    }
    render() {
        console.log(this.props);
        let parseObj = qs.parse(this.props.location.search.slice(1))
        console.log(parseObj);
        let {id,title} = parseObj;
        let detail = this.state.detail.find(item=>{
            return item.id === id;
        })
        console.log(detail);
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>COMMENT:{detail && detail.comment}</li>
                </ul>
            </div>
        )
    }
}
~~~

**总结:**

2. search参数

   路由链接(携带参数):

   ```jsx
   <Link to="/demo/test?name=tom&age=18">详情</Link>
   ```

   注册路由(无需声明，正常注册即可)

   ```jsx
   <Route path="/demo/test" compoent={Test}></Route>
   ```

   接收参数

   ```jsx
   const {search} = this.props.location
   ```

   备注：获取到的search是urlencode编码字符串，需要借助querystring解析。



## 2.13 向路由组件传递state参数

注意该`state`为路由组件参数，需要与我们的类里面的state区分开。

params传参和search传参，都会把参数暴露在地址栏，而state传参则隐藏传递的参数。



![image-20210505000031536](image/image-20210505000031536.png)



![image-20210505000141484](image/image-20210505000141484.png)



**Message.jsx**

~~~jsx
import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Detail from './Detail/index.jsx';
export default class index extends Component {
  state = {
    detailArray:[
      {id:'01',title:'故宫'},
      {id:'02',title:'天坛'},
      {id:'03',title:'圆明园'},
    ]
  }
    render() {
      const {detailArray} = this.state;
        return (
        <div>
            <ul>
              {
                detailArray.map(item=>{
                  return (
                  <li key={item.id}>
                    {/* 向路由组件传递state参数 */}
                    <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                  </li>)
                })
              }
            </ul>
            {/*state参数无需声明接收 */}
            <Route path='/home/message/detail' component={Detail}/>
        </div>
        )
    }
}
~~~



**Detail.jsx**

~~~jsx
import React, { Component } from 'react'

export default class index extends Component {
    state = {
        detail:[
            {id:'01',comment:'故宫是一座宫殿'},
            {id:'02',comment:'天坛是一座祭坛'},
            {id:'03',comment:'圆明园是一座花园'},
        ]
    }
    render() {
        console.log(this.props);
        let {id,title} = this.props.location.state;
        let detail = this.state.detail.find(item=>{
            return item.id === id;
        });
        console.log(detail);
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>COMMENT:{detail && detail.comment}</li>
                </ul>
            </div>
        )
    }
}
~~~

备注：测试中发现采用`HashRouter`存在问题，只能采用`BrowserRouter`。

**总结:**

3.state参数

路由链接(携带参数):

```jsx
<Link to={{pathname:"/demo/test",state:{name:'tom',age:18}}}>详情</Link>
```

注册路由(无需声明，正常注册即可)

```jsx
<Route path="/demo/test" compoent={Test}></Route>
```

接收参数

```jsx
const {state} = this.props.location.state
```

备注：刷新也可以保留住参数。



## 2.14 push和replace



![image-20210505003540604](image/image-20210505003540604.png)



