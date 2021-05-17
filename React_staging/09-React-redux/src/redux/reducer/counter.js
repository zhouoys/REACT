/**
 * 1.该文件是用于创建一个为Counter组件服务的reducer,reducer的本质是一个函数
 * 2.reducer函数会接到两个参数,分别为：之前的状态(preState),动作对象(action)
 */
import {NORMALADD,NORMALSUBTRACT} from '../constant.js'
const initState = 0;
function counterReducer(preState=initState,action){
    //从action对象中获取：type,data;
    const {type,data} = action;
    //根据type决定如何加工数据
    switch (type) {
        case NORMALADD: //如果是加法
            console.log(preState,data);
            console.log('preState + data * 1:',preState + data * 1);
            return preState + data * 1;
        case NORMALSUBTRACT: //如果是减法
            return preState - data * 1;
        default:
            return preState
    }
}
export default counterReducer