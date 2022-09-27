import * as api from '../api';

// action creators are functions that return an action == actions are just objects that have a type fo action and a payload (data store)


export const getPosts = () => async (dispatch) => {

    try{
        const {data} = await api.fetchPosts(); // here we are getting the response from API and then we get the data from the back end via fetch posts

        dispatch({type: 'FETCH_ALL', payload: data});       // successfully using redux to dispatch or pass data from our back end to our front end 
    }
    catch(err){
        console.log(err);
    }
    const action = {type: 'FETCH_ALL', payload: []}
    return action
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);
        dispatch({type: 'CREATE', paload: data})
    }catch (err){
        console.log(err)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost( id, post);

        dispatch({type: 'UPDATE' , payload: data});
    }catch (err) {
        console.log(err);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);
        dispatch({type: 'DELETE', payload: id})

    }catch(err){
        console.log(err) 
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost( id);

        dispatch({type: 'LIKE' , payload: data});
    }catch (err) {
        console.log(err);
    }
}