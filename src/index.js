import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import configureStore, {history} from './store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

// eslint-disable-next-line
import feathersClient from './feathers'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
