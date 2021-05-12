import './App.css';
import store from './redux/store.js'
import Counter from './containers/Counter/index.jsx'
function App() {
  return (
    <div className="App">
      <Counter store={store}/>
    </div>
  );
}
export default App;
