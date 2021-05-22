import React from 'react';
function RefHooks(){
    let inputRef = React.useRef();
    function showInput(){
        window.alert(inputRef.current.value);
    }
    return (
        <div>
            <input type="text" ref={inputRef}/><br></br>
            <button onClick={showInput}>展示输入内容</button>
        </div>
    )
}
export default RefHooks;