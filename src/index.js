import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore, {history} from './store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// eslint-disable-next-line
import feathersClient, {feathersActions, feathersSelectors} from './feathers'
const users = feathersActions('users')
const usersSelectors = feathersSelectors('users')
feathersClient.authenticate({ strategy: 'local', email: 'admin@mypacka.com', password: 'qweasd123' })
window.users = users
window.feathers = feathersClient
window.store = store
window.getUser = usersSelectors['get']
window.findUser = usersSelectors['find']
