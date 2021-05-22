import React from 'react';
function StateHooks(){
    const [count,setCount] = React.useState(0);
    const [useName,setUseName] = React.useState('Alice');

    function addOne(){
        setCount((count)=>count+1)
    }
    function changeUseName(){
        setUseName('Smith')
    }
    return (
        <div>
            <h3>总数是:{count}</h3>
            <h3>名字是:{useName}</h3>
            <button onClick={addOne}>点我加一</button>
            <button onClick={changeUseName}>修改名字</button>
        </div>
    )
}
export default StateHooks;
