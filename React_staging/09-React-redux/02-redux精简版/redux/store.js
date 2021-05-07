/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
//引入createStore,专门用于创建整个redux中最和兴的store对象
import {createStore} from 'redux'
//引入为Counter组件服务的reducer
import counterReducer from './counter_reducer'
//暴露store
export default createStore(counterReducer);