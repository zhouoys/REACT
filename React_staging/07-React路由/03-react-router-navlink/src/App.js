import './App.module.css';
import Home from './page/Home/index.jsx'
import About from './page/About/index.jsx'
import { Link,Route,BrowserRouter,NavLink } from 'react-router-dom'
function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <BrowserRouter>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <Link to="about" className="list-group-item" >About</Link>
              <Link to="home" className="list-group-item" >About</Link> */}
              <NavLink to="about" activeClassName="nav_active" className="list-group-item" >About</NavLink>
              <NavLink to="home"  activeClassName="nav_active" className="list-group-item" >home</NavLink>
            </div>
          </div>
          <Route component={About} path="/about"></Route>
          <Route component={Home} path="/home"></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
