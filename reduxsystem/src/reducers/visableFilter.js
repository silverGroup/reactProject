import {VisibilityFilters} from '../actions'
import * as types from '../constants/ActionTypes'

const VisibilityFilter=(state=VisibilityFilters.SHOW_ALL,action)=>{
      switch(action.type){
        case types.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }

}
export default VisibilityFilter