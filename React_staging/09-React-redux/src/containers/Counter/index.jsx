//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
//引入Count的UI组件
import CounterUI from '../../components/Counter/index.jsx'
////引入action
import {createNormalAdd,createNormalSubtract,createAsyncAdd} from '../../redux/counter_actions'
import {NORMALADD,NORMALSUBTRACT,ASYNCADD} from '../../redux/counter_store.js'
function mapStateToProps (state){
    return {
        count:state
    }
}
function mapDispatchToProps (dispatch){
    return {
        [NORMALADD]:(value)=> {dispatch(createNormalAdd(value*1))},
        [NORMALSUBTRACT]:(value)=>dispatch(createNormalSubtract(value*1)),
        [ASYNCADD]:(value,time)=>dispatch(createAsyncAdd(value*1,time))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterUI);

