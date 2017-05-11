import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { feathersReducer } from './feathers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const history = createHistory()

export default function configureStore(initialState) {
  const enhancer = composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware(),
      createLogger({ duration: true }),  // must behind thunk
      routerMiddleware(history)
    )
 )

  const rootReducer = combineReducers({
    ...reducers,
    users: feathersReducer('users'),
    router: routerReducer
  })
  return createStore(rootReducer, initialState, enhancer)
}
