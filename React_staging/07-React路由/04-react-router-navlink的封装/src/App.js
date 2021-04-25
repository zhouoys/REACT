import './App.module.css';
import Home from './page/Home/index.jsx'
import About from './page/About/index.jsx'
import {Route} from 'react-router-dom'
import MyNavLink from './components/MyNavLink/index.jsx'
function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <Link to="about" className="list-group-item" >About</Link>
              <Link to="home" className="list-group-item" >About</Link> */}
              {/* <NavLink to="about" activeClassName="nav_active" className="list-group-item" >About</NavLink> */}
              <MyNavLink to="/about" a={1} b={2} c={3}>About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <Route component={About} path="/about"></Route>
          <Route component={Home} path="/home"></Route>
        </div>
    </div>
  );
}
export default App;
