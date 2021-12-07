import * as types from '../constants/ActionTypes'

const asyncList=(state=[],action)=>{
      switch(action.type){
        case types.INIT_TODO_ITEM:
            return action.listArray||[]
        default:
            return state
    }

}
export default asyncList