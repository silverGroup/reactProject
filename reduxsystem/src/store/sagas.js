import { put, takeEvery ,call} from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'
import axios from 'axios'

// function* incrementAsync(){
//     yield put({ type: 'INCREMENT' })
// }
// function* helloSaga() {
//   yield takeEvery('SAGA_LIST_ASYNC', incrementAsync)
// }
function* getSagaSync(action) {
    console.log('getSagaSync',action)
    let p = (id)=>(axios.get('http://jsonplaceholder.typicode.com/posts/'+id+'/comments'))
    const res=yield call(p,action.payload) // 执行p函数，返回值赋值给res
    const datas = res.data ?  res.data : []
    // dispatch一个action到reducer
    yield put({
        type:types.GET_SAGA_LIST,
        payload:datas
    })

}
export default function* rootSaga() {
    yield takeEvery(types.SAGA_LIST_ASYNC, getSagaSync)
//   yield all([
//     getSagaSync(),
//     incrementAsync()
//   ])
}

