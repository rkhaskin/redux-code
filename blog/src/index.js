import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import {configureIguazuREST} from './iguazu-rest/config';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(reducers, enhancer);

configureIguazuREST({
  resources: {
    users: {
      fetch: () => ({
        url: `https://jsonplaceholder.typicode.com/users/:id`
      }),
      transformData: (data, store, whatever) => {
        const { id, actionType, state } = store;
        console.log("store", store);
        console.log("qqq", whatever);
        processUser(data, id, actionType, state)
        return data;
      }
    },
    posts: {
      fetch: () => ({
        url: `https://jsonplaceholder.typicode.com/posts/`,
        transformData: (data, { id, actionType, state }) => data
      }),
  },
  defaultOpts: {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  },
  getToState: (state) => state.resources
  }
});

function processUser(data, id, actionType, state) {
  console.log("data", data);
  console.log("id", id);
  console.log("actionType", actionType);
  console.log("state", state);
  // switch (action.type) {
  //   case 'FETCH_USER':
  //     return [...state, action.payload];
  //   default:
  //     return state;
  // }
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
