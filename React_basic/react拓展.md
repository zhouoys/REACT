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

 