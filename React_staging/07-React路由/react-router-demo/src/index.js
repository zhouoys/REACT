import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
  // 放在此处,所有组件都由一个路由器控制
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

