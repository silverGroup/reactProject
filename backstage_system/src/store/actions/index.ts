import * as types from '../ActionTypes'

export const toggleLang = (payload: string)=> ({
  type: types.SET_LANGUAGE,
  payload
})