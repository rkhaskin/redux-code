import {fetchPostsAndUsers} from './index';

export function loadPosts(param) {
 
    return (dispatch, getState) => {
        const data = getState().posts;
        console.log("UUU", getState());
        const status = data ? 'complete' : 'loading';
           
        const promise = data && data.length > 0 ? Promise.resolve : dispatch(fetchPostsAndUsers());
        
        return {data, status, promise};
    }
}