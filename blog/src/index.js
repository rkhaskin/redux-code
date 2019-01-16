import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';




import App from './components/App';
import reducers from './reducers';
import {configureIguazuREST} from 'iguazu-rest';

console.log("1111111111");
configureIguazuREST({
  // the resources you want cached
  resources: {
    // this key will be used in actions
    users: {
      // returns the url and opts that should be passed to fetch
      fetch: () => ({
        // the resource id should always use ':id', nested ids should be more specific
        url: `https://jsonplaceholder.typicode.com/users/:id`,
        // opts that will be sent on every request for this resource
        //opts: {
        //  credentials: 'include',
        //},
      }),
      // optionally override the resources id key, defaults to 'id'
      // this is only used to extract the id after a create or to get the ids of the resources in a collection
      //idKey: 'userId',
      // optionally massage the data to be more RESTful, collections need to be lists, resources need to be objects
      //transformData: (data, { id, actionType, state }) => massageDataToBeRESTful(data)
    },
    posts: {
        fetch: () => {
          console.log("BBBB");
          return (
          
          {
            url: `https://jsonplaceholder.typicode.com/posts`
          })},
          transformData: (data, { id, actionType, state }) => console.log(actionType)
    }
  },
  // opts that will be sent along with every resource request
  defaultOpts: {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  },
  // extend fetch with some added functionality
  //baseFetch: fetchWith6sTimeout,
  // override state location, defaults to state.resources
  getToState: (state) => state.data.resources
});
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const store = createStore(reducers, enhancer);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
