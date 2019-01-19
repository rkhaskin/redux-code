import {fetchPostsAndUsers} from './index';

export function loadPosts(param) {
 
    // dispatch and getState will be passed by thunk
    return (dispatch, getState) => {
        const data = getState().posts;
        const status = data ? 'complete' : 'loading';
        
        // call with dispatch will route the call thru react-redux dispatch function
        const promise = data && data.length > 0 ? Promise.resolve : dispatch(fetchPostsAndUsers());
        
        return {data, status, promise};
    }
}