/**
 * 该文件专门为PersonZ组件生成action对象
 */
import {ADD_PERSON} from '../constant'
//创建增加一个人的action动作对象
export const createAddPersonAction = (data)=>({type:ADD_PERSON,data})