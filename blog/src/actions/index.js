import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

import { queryResource, queryCollection } from 'iguazu-rest';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () =>   dispatch => {
console.log("AAAAAAAA");
//const response = await jsonPlaceholder.get('/posts');

  //dispatch({ type: 'FETCH_POSTS', payload: response.data });
  dispatch(queryCollection({ resource:  'posts' }));
  //console.log("res", res);
  //dispatch(res);
};

export const fetchUser = id => dispatch => {
  //const response = await jsonPlaceholder.get(`/users/${id}`);

  //dispatch({ type: 'FETCH_USER', payload: response.data });

  dispatch(queryResource({ resource: 'users', id}))
};


