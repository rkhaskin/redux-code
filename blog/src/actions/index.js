import _ from 'lodash';
import { queryResource, queryCollection } from 'iguazu-rest';

export const fetchPostsAndUsers = () => (dispatch, getState) => {
  dispatch(fetchPosts());
/*
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
*/    
};

export const fetchPosts = function(dispatch) {
  return function (dispatch) {
    dispatch(queryCollection({ resource: 'posts' }));
  };
  //return dispatch(queryCollection({ resource:  'posts' }));
};

export const fetchUser = id => dispatch => {
  //const response = await jsonPlaceholder.get(`/users/${id}`);

  //dispatch({ type: 'FETCH_USER', payload: response.data });
  dispatch(queryResource({ resource:  'user', id }));
};

