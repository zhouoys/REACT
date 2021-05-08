/**
 * 该文件专门为Counter组件生成action对象
 */
import {NORMALADD,NORMALSUBTRACT} from './counter_store';
export const createNormalAdd = data=>({type:NORMALADD,data});
export const createNormalSubtract = data=>({type:NORMALSUBTRACT,data});
