import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import { resourcesReducer } from 'iguazu-rest'

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  resources: resourcesReducer
});
