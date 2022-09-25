import * as api from '../api';

// action creators are functions that return an action == actions are just objects that have a type fo action and a payload (data store)


export const getPosts = () => async (dispatch) => {

    try{
        const {data} = await api.fetchPosts(); // here we are getting the response from API and then we get the data from the back end via fetch posts

        dispatch({type: 'FETCH_ALL', payload: data});       // successfully using redux to dispatch or pass data from our back end to our front end 
    }
    catch(err){
        console.log(err.message);
    }
    const action = {type: 'FETCH_ALL', payload: []}
    return action
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);
        dispatch({type: 'CREATE', paload: data})
    }catch (err){
        console.log(err.message)
    }
}