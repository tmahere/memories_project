import * as api from '../api';

// action creators are functions that return an action == actions are just objects that have a type fo action and a payload (data store)
//xddddddddddddddddddddddddddddddddddddddddddddds

export const getPosts = () => async (dispatch) => {

    try{
        const {data} = await api.fetchPosts(); // here we are getting the response from API and then we get the data from the back end via fetch posts

        dispatch({type: 'FETCH_ALL', payload: data});       // successfully using redux to dispatch or pass data from our back end to our front end 
    }
    catch(error){
        console.log(error);
    }
    const action = {type: 'FETCH_ALL', payload: []}
    return action
}