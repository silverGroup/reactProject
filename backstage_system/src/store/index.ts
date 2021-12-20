import { createStore,applyMiddleware ,compose} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

 // 中间件，加载thunk
const middleware=[thunk,createLogger()];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
))
export default store