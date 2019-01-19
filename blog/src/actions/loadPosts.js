import {fetchPostsAndUsers, fetchPosts} from './index';

export function loadPosts(param) {
 
    return (dispatch, getState) => {
        return dispatch(fetchPostsAndUsers());
    }
}