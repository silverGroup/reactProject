import * as types from '../constants/ActionTypes'
import axios from 'axios'

let nextTodoId=0
export const addTodo=text=>({
  type: types.ADD_TODO,
  id:nextTodoId++,
  text
})
export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
})
export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
})
export const getInitTodoItemAction= listArray => ({
    type: types.INIT_TODO_ITEM,
    listArray
})

export const getHttpAction = (id,func) => async (dispatch) => {
    let res = await axios.get('http://jsonplaceholder.typicode.com/posts/'+id+'/comments')
    const action = func(res.data)
    dispatch(action)
}
/**
 * saga的action
 */
export const getSagaListAsync = payload => ({
  type: types.SAGA_LIST_ASYNC,
  payload
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/**
 * 异步action
 */
// { type: 'FETCH_POSTS' }
// { type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
// { type: 'FETCH_POSTS', status: 'success', response: { ... } }