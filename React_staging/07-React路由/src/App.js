import './App.module.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './page/Home/index.jsx'
import About from './page/About/index.jsx'
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
              <MyNavLink to="/about" a={1} b={2} c={3}>About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <Switch>
            <Route component={About} path="/about"></Route>
            <Route component={Home} path="/home"></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
    </div>
  );
}
export default App;
