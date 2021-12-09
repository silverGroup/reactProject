import  { combineReducers } from 'redux'
import todos from './todo'
import VisibilityFilter from './visableFilter'
import asyncList from './asyncList';
import sagaList from './sagaList'

export default combineReducers({
    todos,
    VisibilityFilter,
    asyncList,
    sagaList
})