import jsonplaceholder from '../apis/placeholder'

export const fetchPosts = ()=>{
    // dispatch we can change any data that we want
    // gestState - we can read or access any data that we want
    return async function(dispatch, getState){
        // without asunc and wait syntax- it gives a promise not a response
        const response = await jsonplaceholder.get('/posts');
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        })
    }
}