import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
store.subscribe(()=>{
  ReactDOM.render(
      <App />,
    document.getElementById('root')
  );});