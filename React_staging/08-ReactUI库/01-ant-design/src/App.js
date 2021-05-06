import './App.css';
import { Button,DatePicker} from 'antd';
import { DownloadOutlined,SearchOutlined,WechatOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
function onChange(date, dateString) {
  console.log(date, dateString);
}
function App() {
  return (
    <div className="App">
    <button>点击</button><br></br>
    <Button type="primary">Primary Button</Button><br></br>
    <Button type="link">Link Button</Button><br></br>
    <Button type="primary" icon={<DownloadOutlined />} size='large' /><br></br>
    <Button type="primary" icon={<SearchOutlined />} size='large' /><br></br>
    <WechatOutlined /><br></br>
    <DatePicker onChange={onChange} /><br></br>
    </div>
  );
}
export default App;
