# redux简介

## redux学习文档

1. 英文文档: https://redux.js.org/

2. 中文文档: http://www.redux.org.cn/

3. Github: https://github.com/reactjs/redux



##  redux是什么

1. redux是一个专门用于做**状态管理**的JS库(不是react插件库)。

2. 它可以用在react, angular, vue等项目中, 但基本与react配合使用。

3. 作用: 集中式管理react应用中多个组件**共享**的状态。



## 什么情况下需要使用redux

1. 某个组件的状态，需要让其他组件可以随时拿到（共享）。

2. 一个组件需要改变另一个组件的状态（通信）。

3. 总体原则：能不用就不用, 如果不用比较吃力才考虑使用。



# redux工作流程

![image-20210505221309816](image/image-20210505221309816.png)



![image-20210505230516722](image/image-20210505230516722.png)



# redux的三个核心概念

## action

1. 动作的对象

2. 包含2个属性

   + type：标识属性, 值为字符串, 唯一, 必要属性

   + data：数据属性, 值类型任意, 可选属性

3. 例子：{ type: 'ADD_STUDENT',data:{name: 'tom',age:18} }



## reducer

1. 用于初始化状态、加工状态。

2. 加工时，根据旧的state和action， 产生新的state的**纯函数**



## store

1. 将state、action、reducer联系在一起的对象

2. 如何得到此对象?

+ import {createStore} from 'redux'

+ import reducer from './reducers'

+ const store = createStore(reducer)

3. 此对象的功能?

+ getState(): 得到state

+ dispatch(action): 分发action, 触发reducer调用, 产生新的state

+ subscribe(listener): 注册监听, 当产生了新的state时, 自动调用





# redux-精简版

**精简求和案例**

![image-20210505234621194](image/image-20210505234621194.png)

![image-20210505234902810](image/image-20210505234902810.png)

![image-20210505235438072](image/image-20210505235438072.png)





![image-20210505235755295](image/image-20210505235755295.png)



