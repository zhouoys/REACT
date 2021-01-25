
# react简介

## 特点
1. 组件化模式，声明式（与命令式相对应）编码。
2. 在React Native（React的后续高级进阶知识）中使用React语法进行移动端开发。
3. 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互。

## HTML页面引入react
1. babel.min.js
   + a.ES6语法转ES5,import等
   + b.jsx转js(jsx为js类似，提供一些独有功能，参考微信小程序);
2. react.development.js
   + react核心库
3. react-dom.development.js
   + react拓展库，（辅助react操作DOM）
4. prop-types.js
   + (暂时用不上)

**页面引入注意事项**
1. 需要先引入核心块`react.development.js`,在引入拓展块`react-dom.development.js`
2. 总共引入3个模块，最后引入`babel.min.js`
3. 书写`js`的`srcip`标签的`type`属性值必须为`text/babel`,而不是`js`或者是`jsx`，不写默认是`js`

**过程**
1. 创建虚拟DOM
   ```javascript
   const VDOM = <h1>Hello,React</h1>
   //此处值不需要添加字符串引号，因为值为虚拟DOM,jsx语法。
   ```
2. 渲染虚拟DOM到页面
   类似于jQuery的引入，全局有一个jquery对象和一个$，引入`react.devlopment`则具有一个全局对象 `React`,引入`react-dom.development.js`则默认具有一个全局对象`ReactDOM`
   
   ```javascript
   ReactDOM.render(虚拟DOM,挂载DOM的容器);
   ReactDOM.render(VDOM,document.getElementById('app'))//react没有提供选择器功能，必须要手动获取。
   ReactDOM.render(VDOM1,document.getElementById('app'))//该动作为替换，而不是追加，所以展示的是VDOM1中的内容，而不是VDOM,VDOM1均展示
   ```
# 虚拟DOM的两种创建方式

## 使用JSX创建
```javascript
   const VDOM = <h1 id="title">Hello,React</h1>;
   ReactDOM.render(VDOM,document.getElementById('app'));
```
## 使用原生JS创建
   此时不需要导入`babel.min.js`,因为不需要它转换`JSX语法`。
```javascript
const VDOM = React.createElement('h1',{id:'title',className:'first'},'Hello,React');
//区别于document.createElement()创建的真实DOM,React.elementElement创建的是虚拟DOM
ReactDOM.render(VDOM,document.getElementById('app'));
```
   如果此时需要在`h1`标签里面嵌套一个`span`标签，此时必须使用
   ```javascript
   const VODM = React.createElement('h1',{id:'title',className:'first'},React.createElement(
      'span',{id:'amt',className="amt'},'Hello,React'));
//而不是
   const VDOM = React.createElement('h1',{id:'title',className:'first'},'<span>Hello,React</span>')；//标签体内的内容不能添加标签
   ```
   如果有多层复杂的嵌套关系，则`JSX`明显比`JS`要方便很多，这也是为什么会有`JSX`语法的缘故。因为`JSX`可以比较简单的创建虚拟DOM.
   **复杂的JSX语法**
   ```javascript
      const VDOM = (
         <h1 id="title" class="first">
            <span id="amt" class="amt">
               Hello,React
            </span>
         </h1>
      );
      //小括号括起来代表一个整体
   ```
   其实`JSX`经过`babel`翻译之后，转换成的依然还是可被浏览器识别的`原生JS`所创建的虚拟DOM方式，也就是`使用原生创建`的方式，可以说`JSX`就是为简化虚拟DOM的创建而诞生的`JS`语法糖。

## 虚拟DOM的特点
```javascript
<script type="text/javascript">
    const VDOM = React.createElement('h1',{id:'h1'},React.createElement('span',{className:'span'},'Hello,React,Ha,Ha,Ha'));
    const element = document.getElementById('app');
    ReactDOM.render(VDOM,element);
    console.log('虚拟DOM',VDOM);
    console.log('真实DOM',element);
    debugger;
</script>
```
**虚拟DOM与真实DOM**

1. 本质是Object类型的对象（一般对象）。
2. 虚拟DOM比较"轻"，属性比较少，只有React内部在使用。
3. 真实DOM比较"重"，具有DOM所需的全部属性。
4. 虚拟DOM最终会被React转化为真实DOM,呈现在页面上。



# JSX语法

全称JavaScript XML，react定义的一种类似于XML的JS拓展语法：JS+XML。本质是`React.createElement(component,props,...children)`方法的语法糖。

作用：用来简化创建虚拟DOM。



## JSX语法规则

1. 定义虚拟DOM时，不要写引号。
2. 标签中混入JS表达式时要用{}。
3. 样式的类名指定不要用class,要用className。（避免与ES6中的class相冲突）。
4. 内联样式要采用 style={{key:value}},这种形式。（外层{}表示一个内容为一个JS表达式，里层的{}表示JS表达式不是一个函数，或者一个变量，而是一个JS的一般对象）
5. 虚拟DOM必须只有一个根标签。
6. 标签必须闭合。
7. 标签首字母

   + 若小写字母开头，则将该标签转为html中的同名标签，若html中没有该标签对应的同名元素，则直接报错。
+ 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则直接报错。

## JS语句(代码)与表达式的区别

​      *一定注意区分：【js语句(代码)】与【js表达式】*

1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方.

​                下面这些都是表达式：

​                    *(1). a*

​                    *(2). a+b*

​                    *(3). demo(1)*

​                    *(4). arr.map()* 

​                    *(5). function test () {}*

2. 语句(代码)：

​                下面这些都是语句(代码)：

​                    *(1).if(){}*

​                    *(2).for(){}*

​                    (3).switch(){case:xxxx}

<font color="red">React中只允许书写JS表达式而不是JS语句</font>

  如果React传入一个数组，则React自动会遍历这个数组，同时数组里面的元素'<li>Angular</li>'会自动渲染成DOM。

  如果给React传入一个对象，则会直接报错。



# 组件与模块

## 模块

1. 理解：向外提供特定功能的js程序, 一般就是一个js文件。

2. 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂。

3. 作用：复用js, 简化js的编写, 提高js运行效率。





## 组件

1. 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)。

2. 为什么要用组件： 一个界面的功能更复杂。

3. 作用：复用编码, 简化项目编码, 提高运行效率。



## 模块化

当应用的js都以模块来编写的, 这个应用就是一个模块化的应用。



## 组件化

当应用是以多组件的方式实现, 这个应用就是一个组件化的应用。







# React面向组件编程



**react组件特点**

1. <font color="red">组件名必须首字母大写。</font>

2. 虚拟DOM元素只能有一个根元素。

3. 虚拟DOM元素必须有结束标签。



## 函数式组件

用函数定义出来的组件被称为函数式组件。

```html
<script type="text/babel">
	//1.创建函数式组件
    function MyComponent(){
    	console.log(this);//babel编译好开启了严格模式，所以this打印出来为undefined
        return <h2>我是用函数式定义的组件(适用于【简单组件】)的定义</h2>
    }
    //2.渲染组件到页面
    ReactDOM.render(<MyComponent/>,document.getElementById('app'));
</script>
//以上的函数可以直接拷贝到babel官网上去运行，可以查看JSX语法最终被转换的效果。
```

~~~html
<script type="text/babel">
    //1.创建函数式组件
    const title = 'title';
    const content = 'Hello,React';
    function MyComponent(){
        return <h1 className={title}>{content}</h1>;
    };
    const element = document.querySelector('.app');
    //2.渲染组件
    ReactDOM.render(<MyComponent/>,element);
</script>
~~~

**过程：**

1. React解析组件标签（大写开头标签名，如果小写的直接与html标签想映照）。找到了MyComponent组件，找不到则直接报错。
2. 发现组件采用了函数定义的方式创建，随后调用了该函数，将返回的虚拟DOM转为真实DOM,随后渲染到页面上呈现。

**注意：**

1. 函数名首字母必须大写（因为JSX语法只有当组件首字母大写才会被直接渲染成组件，小写字母直接与html元素比较，然后渲染或者报错）。

2. 组件标签必须要闭合。（JSX语法规定组件必须闭合）













## 类式组件

用类定义出来的组件被称为类式组件。



### ES6中的类

```javascript
//创建一个Person类
class Person{
    //构造器方法
    constructor(name,age){
        //构造器中的this指向类的实例对象
        this.name = name;
        this.age = age;
    }
    //一般方法（除开构造器函数，业务自己定义的方法）
    speak(){
        //speak方法放在了类的原型对象上，供实例使用
        //通过Person实例调用speak时，speak中的this就是Person的实例(除非该方法调用了call,apply,bind之类的方法改变了函数内部this的指向)  
        console.log(this);
        console.log(`我叫:${this.name},我年龄是:${this.age}`)
    }
}
//创建一个Person的实例对象
const p1 = new Person('Tom',18);
const p2 = new Person('Jerry',19);
p1.speak();
p2.speak();
new Person('Smith',18).speak();
new Person('Alice',19).speak.call({name:'Faker',age:25});
```



**创建一个Student类，继承Person类**

```javascript
//创建一个Student类，继承了Person类
class Student extends Person{
    //Student构造器方法,可写，可不写，如果Student需要额外的属性，则必须添加，否则可以不添加，直接继承父类的构造器。
    constructor(name,age,grade){
        super(name,age);//如果有extends,且有constructor，则必须通过super来调用父类的构造器，且super必须在构造器的第一行
        this.grade = grade;
    }
    //重写从父类继承过来的方法
    speak(){
        console.log(this);
        console.log(`我叫:${this.name},我年龄是:${this.age},我读的是${this.grade}`)
    }
    study(){
        //study方法放在了Student类的原型对象上，供Student实例使用
        //通过Student实例调用study时，study中的this就是Student的实例
        console.log('我很努力的学习')
    }
}
//直接使用父类的构造器
const s1 = new Student('小张',15);
//使用子类的构造器
const s2 = new Student('小张',18,'高中');
s2.speak();//继承父类的方法
```



**类属性添加**



```javascript
class Car {
    constructor(name,price){
        this.name = name;
        this.price = price;
        this.wheel = 4;
    }
    //类中可以直接写赋值语句，如下代码的含义是：给Car的实例对象添加一个属性,名为brand，值为'奔驰'
    brand = '奔驰'
    buy = ()=>{
        //箭头函数内部没有this,其内部的this指向的是箭头函数定义的时候其外部的this。也就是Car{...}里面的内容。这里指的是Car的实例对象
        console.log(this);
    }
}
const car1 = new Car('奔驰S1',199);
const car2 = new Car('宝马',299);
```



**类的静态属性（static）**

给类添加属性，而不是给类的实例添加属性

```javascript
Class Car {
    static demo = 100;
}
console.log(Car.demo)
```





### 类式组件

```html
<script type="text/babel">
//1.创建类式组件
class MyComponent extends React.Component {
	//render方法在MyComponent原型对象上，供实例对象使用。
	render(){
		//render里面的this指向MyComponent的实例对象《==》MyComponent组件实例对象。
	    console.log(this)
		return <h2>我是用类定义的组件（适用于【复杂组件】的定义）</h2>
	}
}
//2.渲染组件到页面
ReactDOM.render(<MyComponent/>,ele);
</script>
```

**过程**

1. React解析组件标签，找到了MyComponent组件。
2. 发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用原型对象上的render方法。
3. 将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。



## 简单组件与复杂组件

如果你创建的组件是存在状态（state）的，那么就是一个复杂组件，反之没有状态（state）就是简单组件。

1. 人的状态影响着行为==>组件的状态驱动着页面的变化。
2. 组件的状态里面存放着数据，数据的改变就会驱动着页面的展示。



### 组件实例的核心属性：state

~~~html
<script type="text/babel">
	//1.创建组件
    class ChangeWhether extends React.Component {
        constructor(props){
            super(props)
            //初始化状态
            this.state = {isHot:true,isWind:false}

        }
        render(){
            console.log(this);
            //读取状态
            const {isHot,isWind} = this.state;
            return <h1>今天天气很{isHot ? '炎热':'凉爽'}，因为{isWind ? '有风':'无风'}</h1>
        }
    }
    //2.渲染组件到页面
    const ele = document.querySelector('.app');
    ReactDOM.render(<ChangeWhether/>,ele);
</script>
~~~



**React与原生JS的on+事件名的区别**

```html
<div onclick='handle'>原生JS中</div>
<div onClick={handle}>React的JSX语法中</div>
原生JS ==>React的JSX
onclick==>onClick
onblur==>onBlur
React重写了原生DOM中的on+事件名（原先的事件名首字母大写）
handle(){
console.log('被点击了');
}
```





### 类中的方法中的this问题

```html
<script type="text/babel">
    class Whether extends React.Component {
        constructor(props){
            super(props);
            this.state = { isHot:true,isWindy:true}
        }
        render(){
            console.log(this);
            const { isHot, isWindy } = this.state;
            return <h1 onClick= {this.handleChange}>大家好，今天天气很{isHot ? '炎热':'凉爽'}，因为{ isWindy ? '无风':'有风'}</h1>
        }
        handleChange(){
        //handleChange位于Whether的原型对象上，供实例使用。
        //通过Whether实例调用handleChange时，handleChange中的this就是Wether实例
         const {isHot,isWindy} = this.state;
         this.state = {isHot:!isHot,isWindy:!isWindy}
        }
    }
    
    const ele = document.querySelector('.app');
    ReactDOM.render(<Whether/>,ele);
</script>
```

<font color="red">由于handleChange是作为onClick的回调，所以不是通过实例调用的，是直接调用。类中的方法默认开启了局部的严格模式，所以handleChange中的this为undefined。</font>



<font color="red">通过Whether实例调用handleChange时，handleChange中的this就是Wether实例</font>,所以一下的类方法在浏览器依旧会报错，因为方法`handleChange`不是由`Whether`实例对象调用的。方法里面的this会丢失。

```javascript
handleChange(){
    //handleChange位于Whether的原型对象上，供实例使用。
    //通过Whether实例调用handleChange时，handleChange中的this就是Wether实例
    const {isHot,isWindy} = this.state;
    this.state = {isHot:!isHot,isWindy:!isWindy}
}
//此时在DOM中绑定这个函数，当点击的时候，是DOM在操作函数，而不是Person的实例，所以会出undefined的问题。
```



<font color="red">类中的所有方法都默认添加了'use strict'严格模式</font>

```html
<script type="text/javascript">
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    study(){
        //study方法放在了哪里？--类的原型对象上，供实例调用。
        //通过Peron实例调用study时，study中的this就是Person实例。
        console.log(this)
    }
}
const p1 = new Person('Tom',18);
p1.study()//通过实例调用study方法==》打印Person{}
const p2 = p1.study;
p2()=>//undefined。直接调用会打印出window，因为类中所有定义的方法，在局部也就是方法内部都开启了严格模式，此模式为类自动开启的，与babel无关，所以方法中的this都不会指向this
</script>
```



p1.study ====> function(){...}

p2==========>



### 类中的方法中的this解决。

`bind()`最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的this值。常见的错误就像上面的例子一样，将方法从对象中拿出来，然后调用，并且希望this指向原来的对象。如果不做特殊处理，一般会丢失原来的对象。使用`bind()`方法能够很漂亮的解决这个问题：

1. 生成一个新的函数。
2. 更改函数的this指向。
3. 不会调用函数。

```javascript
<script type="text/babel">
    class Whether extends React.Component {
        constructor(props){
            super(props);
            this.state = { isHot:true,isWindy:true}；
            //解决handleChange中的this指向问题。
            this.handleChange = this.handleChange.bind(this);
        }
        render(){
            console.log(this);
            const { isHot, isWindy } = this.state;
            return <h1 onClick= {this.handleChange}>大家好，今天天气很{isHot ? '炎热':'凉爽'}，因为{ isWindy ? '无风':'有风'}</h1>
        }
        handleChange(){
        //handleChange位于Whether的原型对象上，供实例使用。
        //通过Whether实例调用handleChange时，handleChange中的this就是Wether实例
         const {isHot,isWindy} = this.state;
         this.state = {isHot:!isHot,isWindy:!isWindy}
        }
    }
    
    const ele = document.querySelector('.app');
    ReactDOM.render(<Whether/>,ele);
</script>
```



#### setState的使用

<font color="red">React的状态state（数据）不可直接更改</font>，需要使用React提供的API。

React的状态只能通过setState来修改。

~~~javascript
changeWhether(){
    console.log('changeWhether:',this);
    const {isHot,isWindy} = this.state;
    this.setState({
        isHot:!isHot,
        isWindy: !isWindy
    })
}
~~~

**注意：**

1. 状态（state）不可直接更改。
2. 状态必须通过`setState`进行更新，且更新是一种合并，而不是替换。

3. 页面初始化时候，构造器只调用一次。
4. render函数为1+n次，1为初始化调用，n是状态更新的次数。





#### state的简写形式

`Reack`的类组件里面，对于非render方法，方法里面的this都为`undefined`。

1. 直接调用方法。
2. 采用严格模式。

而且可以知道采用

```javascript
this.methodName1 = this.methodName1.bind(this);
this.methodName2 = this.methodName2.bind(this);
this.methodName3 = this.methodName3.bind(this);
...
```

一旦类定义组件的方法与组件的DOM的事件的回调函数过多，则非常的麻烦。。。

~~~javascript
    class Weather extends React.Component {
        //此处省略了构造函数，因为在类中采用了赋值语句的方式，给实例添加属性，没有采用构造函数赋值。
        state = { isHot:true,isWindy:true};
        render(){
            const { isHot,isWindy} = this.state;
            return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热':'凉爽'}，因为{isWindy ? '无风':'有风'}</h1>
        }
		//箭头函数内部没有this,其内部的this指向的是箭头函数定义的时候其外部的this。也就是Car{...}里面的内容。这里指的是Car的实例对象
		//注意：箭头函数不受'use strict'的影响。
        changeWeather = ()=>{
        const { isHot,isWindy} = this.state;
        this.setState({
            isHot:!isHot,
            isWindy:!isWindy
        })
    }
    }
~~~

<font color="red">箭头函数不受'use strict'的影响。</font>



#### state总结

**理解**

1. state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)

2. 组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)

**强烈注意**

1. 组件中render方法中的this为组件实例对象

2. 组件自定义的方法中this为undefined，如何解决？
   + 强制绑定this: 通过函数对象的bind()。
   + 箭头函数。
   + 状态数据，不能直接修改或更新。





### props

**理解**

1. 每个组件对象都会有props(properties的简写)属性。

2. 组件标签的所有属性都保存在props中。

**作用**

1. 通过标签属性从组件外向组件内传递变化的数据。

2. 注意: 组件内部不要修改props数据。

#### 基本使用

```html
<script type="text/babel">
    class Person extends React.Component {
        render(){
            const {name,sex,age} = this.props;
            return (
                    <ul>
                        <li><h1>{name}</h1></li>
                        <li><h1>{sex}</h1></li>
                        <li><h1>{age}</h1></li>
                    </ul>
                  )
        }
    }
    const ele1 = document.querySelector('.app1');
    const ele2 = document.querySelector('.app2');
    const ele3 = document.querySelector('.app3');
    ReactDOM.render(<Person name="Tom" age="25" sex="男"/>,ele1);
    ReactDOM.render(<Person name="Jerry" age="23" sex="女"/>,ele2);
    ReactDOM.render(<Person name="Smith" age="58" sex="不男不女"/>,ele3);
</script>
```



#### 批量传递

```html
<script type="text/babel">
const obj = {name:'Smith',age:'25',sex:'female'};
ReactDOM.render(<Person name={obj.name} age={obj.age} sex={obj.sex} />,ele);
ReactDOM.render(<Person {...obj} />,ele)
</script>
```



#### 展开运算符

`...`展开运算符是无法展开对象的，因为一般的对象没有`iterator`。一般常用于数组。

**数组中使用**

```javascript
let arr1 = [1,3,5,7,9];
let arr2 = [2,4,6,8,10];
console.log(...arr1);//展开一个数组 1,3,5,7,9
let arr3 = [...arr1,...arr2];//连接一个数组
```



**在函数中使用**

```javascript
function sum(...numbers){
    return numbers.reduct((preValue,currentValue)=>{
        return preValue + currentValue;
    })
}
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
```



**构造字面量对象时使用**

~~~javascript
let person = {name:'tom',age:18};
let person2 = {...person};
console.log(...person);//报错，展开运算符不能展开对象。
person.name = 'Jerry';
console.log(person2);
console.log(person);
~~~



**合并对象**

```javascript
let person3 = {...person,name:'Alice',address:'地球'};
console.log(person3);
```



#### 对props进行限制

```html
<!--引入prop-type.js文件，用于对组件标签属性进行限制,当页面引入之后，就多了一个全局对象PropTypes->
<script type="text/javascript" src="../static/js/prop-type.js"></script>

<script type="text/babel">
//对标签属性进行类型，必要性的限制
Person.propTypes = {
   name:PropTypes.string.isRequired,//限制传入的组件属性name对应值必须是String,且为必传值。
   sex:PropTypes.string,
   age:PropTypes.number,
   speak:PropTypes.func,//限制传入的必须是一个方法函数
} 
//指定默认的标签属性值
Person.defaultProps = {
   sex:'不男不女',//sex不传，默认为'不男不女'
   age:18  //年龄不穿默认为18
}
</script>
```





<<<<<<< HEAD:React_basic/笔记.md
#### props的简写形式

`props`是只读的，不允许修改。

~~~javascript
this.props.name = 'jack';//在组件内直接修改报错
=======
#### 类式组件中的构造器与props

```javascript
class Person extends React.Component {
    constructor(props){
        super(props)
        console.log('constructor',this.props)
    }
}
//构造器是否接受props，是否传递给props，取决于：是否希望在构造器中通过访问props。(基本用不到，因为在构造器中可以直接 this.xxx = props)
```

在React组件挂载之前，会调用它的构造函数，在为`React.Component`子类实现构造函数时，应在其他语句之前调用`super(props)`.否则，`this.props`在构造函数中可能会出现未定义`undefined`的bug

通常，在`React`中，构造函数仅用于以下两种情况。

+ 通过给`this.state`赋值对象来初始化内部`state`。
+ 为事件处理函数绑定实例。

#### 





#### 函数式组件使用props

一般而言，`React`的三大属性是通过类实例调用的，函数式组件没有实例，所以无法使用这三大属性。但是函数式组件可以使用一个特殊属性`props`，可以通过函数传值使用。

​~~~jsx
function Person (props){
    const {name,age,sex} = props;
    return (
            <ul>
            	<li>{name}</li>
            	<li>{age} </li>
                <li>{sex} </li>
            </ul>
            )
}
Person.propTypes = {
    ......
}
Person.defaultProps = {
    ......
}
ReactDOM.render(<Person name="jerry" age={45} sex="男" />,ele);
>>>>>>> ec6f29062bac5352ec2571d681eb5cd4617859da:React_basic/react基础.md
~~~



<<<<<<< HEAD:React_basic/笔记.md
```javascript
    class MyComponent extends React.Component {
        render(){
            const { name,age,sex,speak } = this.props;
            return (
                <div>
                    <ul>
                        <li>{name}</li>
                        <li>{age + 1}</li>
                        <li>{sex}</li>
                        <li>{speak()}</li>
                    </ul>
                </div>
            )
        }
       static propTypes = {
        name:PropTypes.string.isRequired,
        age:PropTypes.number,
        sex:PropTypes.string,
        speak:PropTypes.func
    }
       static defaultProps = {
        age:11,
        sex:'不男不女',
        speak:function(){
            return 'Hello,React';
        }
    }
    }
```

=======
#### props总结







### refs

组件内的标签可以定义ref属性来标识自己，相当于html的id。

#### 字符串形式的ref

~~~jsx
    class Info extends React.Component {
        showLeftInfo = ()=>{
            //此处通过this.refs.leftObj获取的是虚拟DOM转成真实DOM，也就是一个真正的节点。
            let {leftObj} = this.refs;
            window.alert(leftObj.value);
        }
        showRightInfo = ()=>{
            let {rightObj} = this.refs;
            window.alert(rightObj.value);
        }
        render(){
            return (
                <div>
                    <input ref="leftObj" /> &nbsp; &nbsp;
                    <button onClick={this.showLeftInfo}>点击一下</button> &nbsp; &nbsp;
                    <input ref="rightObj" onBlur={this.showRightInfo}/>
                </div>
            )
        }
    }
~~~

字符串形式的ref已经开始不被官方所支持，逐渐废弃了。因为字符串形式的ref使用过多的话会存在一些效率问题。



#### 回调形式的ref

~~~jsx
    class Info extends React.Component {
        showLeftInfo = ()=>{
            //此处通过this.refs.leftObj获取的是虚拟DOM转成真实DOM，也就是一个真正的节点。
            let {leftObj} = this;
            window.alert(leftObj.value);
        }
        showRightInfo = ()=>{
            let {rightObj} = this;
            window.alert(rightObj.value);
        }
        render(){
            return (
                <div>
                    <input ref={currentNode => this.leftObj = currentNode} /> &nbsp; &nbsp;
                    <button onClick={this.showLeftInfo}>点击一下</button> &nbsp; &nbsp;
                    <input ref={currentNode => this.rightObj = currentNode} onBlur={this.showRightInfo}/>
                </div>
            )
        }
    }
~~~



**回调ref调用次数问题**

如果`ref回调函数`是以内联函数的方式定义的(如上所示，直接在ref = {...}里面定义一个函数)，在更新过程中它会被执行两次，第一次传入参数`null`,然后第二次会传入参数`DOM元素`。这是因为在每次更新渲染时会创建一个新的函数实例，所以React清空旧的ref并设置新的。通过将ref的回调函数定义成class的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

~~~jsx
class MyComponent extends React.Component {
state = { isHot:true }
handleLeft = ()=>{
    let { leftValue } = this;
    window.alert(leftValue.value);
}
handleRight = ()=>{
    let { rightValue } = this;
    window.alert(rightValue.value);
}
changeWhether = ()=>{
    const { isHot } = this.state;
    this.setState({
        isHot:!isHot
    })
}
handle = (currentNode)=>{
    this.leftValue = currentNode;
    console.log('left:',currentNode);
}
render(){
    const { isHot } = this.state;
    return (
        <div>
            <div>今天天气很{ isHot ? '炎热':'凉爽' }</div>
            {/*内联函数*/}
            {/*<input ref={currentNode => {this.leftValue = currentNode;console.log('left:',currentNode);}} type="text" />*/}
            {/*class的绑定函数*/}
            <input ref={this.handle} type="text" />
            <div>
                <button onClick = {this.handleLeft}>Click here</button>
                <button onClick = {this.changeWhether}>点击一下</button>
            </div>
        </div>
    );
}
}
const ele = document.querySelector('.app');
ReactDOM.render(<MyComponent />,ele);
~~~



#### createRef创建ref容器

```jsx
    class MyComponent extends React.Component {
        //React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点。该容器是"专人专用"的
        myRefLeft = React.createRef();
        myRefRight = React.createRef();
        handleLeft = ()=>{
            const ele = this.myRefLeft;
            console.log(ele);
            window.alert(ele.current.value);
        }
        handleRight = ()=>{
            const ele = this.myRefRight;
            window.alert(ele.current.value);
        }
        render(){
            return (
                <div>
                    <div>
                        <input ref={this.myRefLeft} /><br/><br/>
                        <button onClick= {this.handleLeft}>Click left here</button>
                    </div>
                    <br/><br/>
                    <div>
                        <input ref={this.myRefRight}  onBlur={this.handleRight}/><br/><br/>
                    </div>
                </div>
            )
        }
    }
    const ele = document.querySelector('.app');
    ReactDOM.render(<MyComponent />,ele);
```



#### refs总结





### 事件处理

1. 通过onXxx属性指定事件处理函数(注意大小写)。
   + React使用的是自定义(合成)事件, 而不是使用的原生DOM事件。--为了更好的兼容性。
   + React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)。--为了高效

2. 通过event.target得到发生事件的DOM元素对象。--不要过渡使用ref。

```jsx
show = (event) => {
    window.alert(event.target.value);
}
render(){
    return (
        <input onBlur={this.show} type="text"/>
    )
}
```





## 收集表单数据



### 受控组件

~~~jsx
class Login extends React.Component {
    state = {
        username:'',
        password:''
    }
handleSubmit = (event)=>{
    event.preventDefault();
    const {username,password} = this.state;
    window.alert(`你好，你的用户名是${username},密码是${password}`)
}
usChange=(event)=>{
    console.log(event.target.value);
    this.setState({
        username:event.target.value
    })
}
pwChange=(event)=>{
    console.log(event.target.value);
    this.setState({
        password:event.target.value
    })
}
render(){
    return (
        <form action="https://www.baidu.com" onSubmit={this.handleSubmit}>
            用户名：<input type="text" name="username" onChange={this.usChange}/>
            密码：<input type="password" name="pwd" onChange={this.pwChange}/>
            <button>登录</button>
        </form>
    )
}
}
~~~



所有的原生输入类的`DOM`都可以绑定一个`onchange`事件，包括单选和多选，而`React`中也有对应的`onChange`事件。

组件中所有的输入类的DOM，在输入的时候，随着输入的值(value)的变化，把相应的值(value)维护到状态(state)里面,需要使用时，直接从状态中获取。这就是受控组件。





### 非受控组件

~~~jsx
class Login extends React.Component {
    handleSubmit = (event)=>{
        event.preventDefault();
        const {username,pwd} = this;
        window.alert(`你好，你的用户名是${username.value},密码是${pwd.value}`)
    }
    render(){
        return (
            <form action="https://www.baidu.com" onSubmit={this.handleSubmit}>
                用户名：<input type="text" ref={currentNode => this.username=currentNode} name="username" />
                密码：<input type="password" ref={currentNode => this.pwd = currentNode} name="pwd"/>
                <button>登录</button>
            </form>
        )
    }
}
const ele = document.querySelector('.app');
ReactDOM.render(<Login />,ele);
~~~



**非受控组件定义**

1. 组件中含有表单`form`。
2. 表单中含有输入项目，如`input`，`checkbox`，`radio`等表单元素。
3. 组件中所有输入项目都采用`现用现取`的模式，如上所示。
4. 综上为非受控组件

