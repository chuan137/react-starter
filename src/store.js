import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import devTools from 'remote-redux-devtools'
import reducers from './reducers'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'

export const history = createHistory()

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunk, 
      promiseMiddleware(),
      createLogger({duration: true}),  // must behind thunk
      routerMiddleware(history)
    ),
    devTools()
  )

  const rootReducer = combineReducers({
    ...reducers,
    router: routerReducer
  })
  return createStore(rootReducer, initialState, enhancer)
}