import React from 'react';
import ReactDOM from 'react-dom'
function EffectHooks(){
    const [count,setCount] = React.useState(0);
    const [useName,setUseName] = React.useState('Alice');
    React.useEffect(()=>{
        console.log('React.useEffect');
        let timer =setInterval(()=>{
            addOne()
        },1000)
        return ()=>{
            console.log('clearInterval');
            clearInterval(timer);
        }
    },[])
    function addOne(){
        setCount((count)=>count+1)
    }
    function changeUseName(){
        setUseName('Smith')
    }
    function removeComponent(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }
    return (
        <div>
            <h3>总数是:{count}</h3>
            <h3>名字是:{useName}</h3>
            <button onClick={addOne}>点我加一</button>
            <button onClick={changeUseName}>修改名字</button>
            <button onClick={removeComponent}>卸载组件</button>
        </div>
    )
}
export default EffectHooks;
