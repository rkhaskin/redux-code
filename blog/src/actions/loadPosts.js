import {fetchPostsAndUsers, fetchUser} from './index';


export function loadPosts(param) {
 
    return (dispatch, getState) => {
        return dispatch(fetchPostsAndUsers());
    }
}

export function loadUsers(id) {
    return (dispatch, getState) => {
        //console.log("IIIII", id);
        return dispatch(fetchUser(id));
    }
}