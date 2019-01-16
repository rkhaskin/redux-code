import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import {configureIguazuREST} from 'iguazu-rest';

configureIguazuREST({
  resources: {
    posts: {
        fetch: () => ({ url: `https://jsonplaceholder.typicode.com/posts` }),
          transformData: (data, {actionType, state }) => data
    }
  },
  getToState: (state) => state.data.resources
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
