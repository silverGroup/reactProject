import  { combineReducers } from 'redux'
import todos from './todo'
import VisibilityFilter from './visableFilter'
import asyncList from './asyncList';

export default combineReducers({
    todos,
    VisibilityFilter,
    asyncList
})