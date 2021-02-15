import react,{ Component } from 'react';
import style from './index.module.css'
export default class Style extends Component{
    render(){
        return (
            <h3 className = {style.title}>Style,React组件</h3>
        )
    }
}