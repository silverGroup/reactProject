import * as types from '../ActionTypes'

export const lang=(state=sessionStorage.system_lang||'zh',action: { type: any; payload: any })=>{
    switch(action.type){
        case types.SET_LANGUAGE:
            sessionStorage.setItem('system_lang',action.payload)
            return action.payload
        default:
            return state
    }
}
