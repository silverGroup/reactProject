import * as types from '../ActionTypes'

export const toggleLang = (payload: string)=> ({
  type: types.SET_LANGUAGE,
  payload
})
export const toggleUserInfo=(payload:object)=>({
    type:types.SET_LOGIN_INFO,
    payload
})