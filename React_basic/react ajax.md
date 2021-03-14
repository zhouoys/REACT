# 理解

## 前置说明

1. React本身只关注于界面, 并不包含发送ajax请求的代码
2. 前端应用需要通过ajax请求与后台进行交互(json数据
3. react应用中需要集成第三方ajax库(或自己封装）



## 常用的ajax请求库

1. jQuery: 比较重, 如果需要另外引入不建议使用。
2. axios: 轻量级, 建议使用
   +  封装XmlHttpRequest对象的ajax
   + promise风格
   + 可以用在浏览器端和node服务器端



## axios

[官方文档](https://github.com/axios/axios)



# react脚手架配置代理总结

## 方法一

在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

## 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。





# github搜索案例

1. ```javascript
   const { ref_searchInput:{ value:keyValue } } = this;//连续结构赋值+重命名；
   ```

2. ```jsx
   
   <input type="text" ref={element => this.ref_searchInput = element } placeholder="enter the name you search"/>&nbsp;/*ref的函数形式*/
   <button onClick={this.search}>Search</button>
   ```

3. ```jsx
   axios.get(`https://api.github.com/search/users?q=${keyValue}`).then(res=>{ //直接发github，后端利用了cors技术实现跨域
   axios.get(`http://localhost:3000/zw1/search/users?q=${keyValue}`).then( res=>{ //利用本地的中间服务器实现转发
   ```




**ES6小知识点：解构赋值+重命名:**

```javascript
let obj = {a:{b:1}}
const {a} = obj; //传统解构赋值
const {a:{b}} = obj; //连续解构赋值
const {a:{b:value}} = obj; //连续解构赋值+重命名
```



# 消息订阅-发布机制

1. 工具库: PubSubJS

2. 下载: npm install pubsub-js --save

3. 使用: 

+  import PubSub from 'pubsub-js' //引入
+ PubSub.subscribe('delete', function(data){ }); //订阅
+ PubSub.publish('delete', data) //发布消息

**兄弟组件传值，而不必经过父组件：采用消息订阅-发布技术实现**

"消息必须要先订阅，才能在发布的时候接收到这个消息，类似于现有一个手机号，中国移动发的消息才能接收到"

**安装**

~~~json
yarn add pubsub-js
~~~

**引入**

```javascript
// es6引入
import PubSub from 'pubsub-js'
// commonjS引入
const PubSub = require('pubsub-js');
```

**订阅与发布**

```javascript
// create a function to subscribe to topics
var mySubscriber = function (msg, data) {
    console.log( msg, data );
};
// add the function to the list of subscribers for a particular topic
// we're keeping the returned token, in order to be able to unsubscribe

// from the topic later on
// 消息订阅
var token = PubSub.subscribe('MY TOPIC', mySubscriber);

// publish a topic asynchronously
// 消息发布
PubSub.publish('MY TOPIC', 'hello world!');

// publish a topic synchronously, which is faster in some environments,
// but will get confusing when one topic triggers new topics in the
// same execution chain
// USE WITH CAUTION, HERE BE DRAGONS!!!
PubSub.publishSync('MY TOPIC', 'hello world!');

// 取消订阅
PubSub.unsubscribe(token);
```



**消息订阅与发布机制小结**

	1.先订阅，再发布（理解：有一种隔空对话的感觉）
	2.适用于任意组件间通信
	3.要在组件的componentWillUnmount中取消订阅
## github案例

**采用消息订阅-发布技术，修改案例**

1. ```javascript
   //List.jsx
   state = {
       userList:[],//保存用户数据
       isFirst:true,//是否是第一次进入
       isLoading:false,//是否是在加载中
       errMsg:''//错误信息
   }
   componentDidMount(){
       this.token = PubSub.subscribe('zw',(_,data)=>{
       console.log('订阅接收的参数1',_);
       console.log('订阅接收的参数2',data);
       this.setState(data);
       })
   }
   componentWillUnmount(){
   	PubSub.unsubscribe(this.token);
   }
   ```

2. ```javascript
   //Search.jsx
   search = ()=>{
       const { ref_searchInput:{ value:keyValue } } = this;//连续结构赋值+重命名；
       console.log('search--key:'+keyValue);
       // this.props.updateState({isFirst:false,isLoading:true})
       PubSub.publish('zw',{isFirst:false,isLoading:true})
       // axios.get(`https://api.github.com/search/users?q=${keyValue}`).then(res=>{ //直接发github，后端利用了cors技术实现跨域
       axios.get(`http://localhost:3000/zw1/search/users?q=${keyValue}`).then( res=>{ //利用本地的中间服务器实现转发
           console.log(res);
           // this.props.updateState({isLoading:false,userList:res.data.items})
           PubSub.publish('zw',{isLoading:false,userList:res.data.items})
       }).catch(err=>{
           console.log(err);
           // this.props.updateState({isLoading:false,errMsg:err.message})
           PubSub.publish('zw',{isLoading:false,errMsg:err.message})
       })
   }
   ```



# Fetch

1. `XMLHttpRequest`:

   + xhr（原生，比较复杂）
   + jQuery（封装，容易形成回调地狱）
   + axios（采用Promise）

   以上三种都是基于`xhr`对象或者对`xhr`的封装。

`fetch`与`XMLHttpRequest`类似，为新一代`javascript`浏览器内置的请求方式，但是`fetch`更加关注于分离的设计思想，也就是先请求验证是否可以访问服务器，在验证是否可以获取数据的思路。

**文档**

1. https://github.github.io/fetch/

2. https://segmentfault.com/a/1190000003810652



**特点**

1. fetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求

2. 老版本浏览器可能不支持

## 相关API

 **Get请求**

~~~javascript
fetch(url).then(function(response) {
    return response.json()
}).then(function(data) {
    console.log(data)
}).catch(function(e) {
    console.log(e)
});
~~~

**Post请求**

~~~javascript
fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
}).then(function(data) {
    console.log(data)
}).catch(function(e) {
    console.log(e)
})
~~~



**注释块**

~~~javascript
// #region 
.........
// #endregion
~~~



### **fetch未优化**

~~~javascript
//#region 
fetch(`http://localhost:3000/zw1/search/users?q=${keyValue}`).then(resonse=>{
    console.log('联系服务器请求成功了==>',resonse);
    return resonse.json();
},err=>{
    console.log('联系服务器请求失败了==>',err);
    return new Promise(()=>{});//阻断promise继续向下传播到下一个then的err中
}).then(res=>{
    console.log('获取数据成功了==>',res);
    PubSub.publish('zw',{isLoading:false,userList:res.items})
},err=>{
    console.log('获取数据失败了==>',err);
})
//#endregion
~~~



### **采用fetch-优化-catch穿透**

```javascript
//#region
fetch(`http://localhost:3000/zw1/search/users?q=${keyValue}`).then(resonse=>{
    console.log('联系服务器请求成功了==>',resonse);
    return resonse.json();
}).then(res=>{
    console.log('获取数据成功了==>',res);
    PubSub.publish('zw',{isLoading:false,userList:res.items})
}).catch(err=>{
    console.log('请求报错==>',err);
})
//#endregion
```



### **采用fetch-优化-异步函数**

```javascript
try{
    let response = await fetch(`http://localhost:3000/zw1/search/users?q=${keyValue}`);
    let data = await response.json();
    console.log('返回的数据==>',data);
    PubSub.publish('zw',{isLoading:false,userList:data.items})
}catch(err){
    console.log('请求报错==>',err);
}
```

