import _ from 'lodash';
import { queryResource, queryCollection } from '../iguazu-rest/actions/query';

export const fetchPostsAndUsers = () => (dispatch, getState) => {
   const obj = dispatch(fetchPosts());

   console.log("QQQQ", obj);
   console.log("FFFF", getState().posts)

  //  const users = _.chain(obj.data)
  // .map('userId')
  // .uniq()
  // .forEach(id => dispatch(fetchUser(id)))
  // .value();
    return obj;
};

export const fetchUsers = (posts) => (dispatch) => {
  // const users = _.chain(posts)
  // .map('userId')
  // .uniq()
  // .forEach(id => dispatch(fetchUser(id)))
  // .value();

  const mapped = _.map(posts, 'userId');
  const mappedUniq = _.uniq(mapped);
  //const call = _.forEach(mappedUniq, id => console.log("UU", id));
  const call = _.forEach(mappedUniq, function(id) {return dispatch(fetchUser(id))});
  const val = call.value();

  return dispatch(val);
}

export const fetchPosts = function() {
  return function (dispatch) {
    return dispatch(queryCollection({ resource: 'posts' }));
  };
};

export const fetchUser = id => dispatch => {
  console.log("ID =", id);
  //const response = await jsonPlaceholder.get(`/users/${id}`);

  //dispatch({ type: 'FETCH_USER', payload: response.data });
  return dispatch(queryResource({ resource:  'users', id }));
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two seconds later');
}

export const testPosts = function(users) {

  return function (dispatch) {
    console.log("WWWW", users);
    const userArray = _.map(users, id => {
      return dispatch(fetchUser(id));
    })
     //const res = await dispatch(users);
     console.log("BBBBBB", userArray);
     //eturn res;
  }
}

