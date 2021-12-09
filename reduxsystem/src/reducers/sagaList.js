import * as types from '../constants/ActionTypes'

const sagaList=(state=[],action)=>{
      switch(action.type){
        case types.GET_SAGA_LIST:
            return action.payload||[]
        default:
            return state
    }

}
export default sagaList