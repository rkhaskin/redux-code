import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

import { queryResource, queryCollection } from 'iguazu-rest';

export const fetchPostsAndUsers = () => (dispatch, getState) => {
   dispatch(fetchPosts());

  };

export const fetchPosts = () =>   dispatch => {
console.log("AAAAAAAA");
//const response = await jsonPlaceholder.get('/posts');

  //dispatch({ type: 'FETCH_POSTS', payload: response.data });
  dispatch(queryCollection({ resource:  'posts' }));
  //console.log("res", res);
  //dispatch(res);
};




