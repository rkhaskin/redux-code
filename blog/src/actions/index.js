import _ from 'lodash';
import { queryResource, queryCollection } from 'iguazu-rest';

export const fetchPostsAndUsers = () => (dispatch, getState) => {
   const fetchPostsRes = fetchPosts(dispatch);
   console.log("fetchPosts", fetchPostsRes)
   const obj = dispatch(fetchPostsRes);
   console.log("obj", obj);
   
   demo();
   console.log("YYYYYYYY", getState());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
    
    return obj;
};

export const fetchPosts = function(dispatch) {
  return function (dispatch) {
    const col = queryCollection({ resource: 'posts' })
    console.log("Col", col)
    return dispatch(col);
  };
};

export const fetchUser = id => dispatch => {
  console.log("ID =", id);
  //const response = await jsonPlaceholder.get(`/users/${id}`);

  //dispatch({ type: 'FETCH_USER', payload: response.data });
  dispatch(queryResource({ resource:  'user', id }));
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two seconds later');
}


