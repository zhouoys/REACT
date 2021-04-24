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
