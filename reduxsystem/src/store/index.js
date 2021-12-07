import { createStore,applyMiddleware ,compose} from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { helloSaga } from './sagas'
const middleware=[ thunk ];
if(process.env.NODE_ENV !== 'production'){
    middleware.push(createLogger())
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
))

// const store=createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
export default store