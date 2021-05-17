/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
//引入createStore,专门用于创建整个redux中最和兴的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入redux-thunk，用于持支异步actions
import thunk from 'redux-thunk';
//引入为Counter组件服务的reducer
import counterReducer from './reducer/counter.js'
import personReducer from './reducer/person.js'
//汇总所有的reducer,成为一个allReducer
const allReducer = combineReducers({
    count:counterReducer, //key为当前的reducer所传递的状态名称，值为容器组件对应的reducer
    personList:personReducer
})
//暴露store
export default createStore(allReducer,applyMiddleware(thunk));