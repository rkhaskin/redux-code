import {fetchPostsAndUsers, fetchPosts} from './index';

export function loadPosts(param) {
 
    return (dispatch, getState) => {
        const data = getState().resources.posts;
        console.log("UUU", getState().resources);
        const status = data ? 'complete' : 'loading';
           
//        const promise = data && data.length > 0 ? Promise.resolve : dispatch(fetchPostsAndUsers());
        const promise = data && data.length > 0 ? Promise.resolve : dispatch(fetchPosts());
        
        return {data, status, promise};
    }
}