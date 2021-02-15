import react,{ Component } from 'react';
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome'
import Style from './components/Style'
class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
                <Style/>
            </div>
        )
    }
}
export default App;