import { LStorageService } from '../../utils/storage';
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
export const userinfo=(state={
    ticket:LStorageService.get('ticket')||'',
    token:LStorageService.get('system_token')||''
},action:{ type:any;payload:any})=>{
    switch(action.type){
        case types.SET_LOGIN_INFO:
            if(action.payload.ticket&&action.payload.token){
                LStorageService.set('ticket',action.payload.ticket)
                LStorageService.set('system_token',action.payload.token)
            }else{
                LStorageService.remove('ticket')
                LStorageService.remove('system_token')
            }
            return action.payload
        default:
            return state
    }
}
