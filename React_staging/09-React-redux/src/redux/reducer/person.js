/**
 * 该文件用于创建一个专门为Person组件服务的reducer。其本质是一个函数
 */
import {ADD_PERSON} from '../constant.js'
const initState = [{
    id:'001',
    name:'silly',
    age:25
}]
const personReducer = function(preState=initState,action){
    const {data,type} = action;
    switch (type) {
        case ADD_PERSON:  //添加一个人
            return [data,...preState]
        default:
            return preState;
    }
}
export default personReducer;