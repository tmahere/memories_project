import axios from 'axios';

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url); //axios used to map UI to url of server
export const createPost = (newPost) => axios.post(url, newPost) // sending the entire new post
export const updatePost =(id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost =(id) => axios.patch(`${url}/${id}/likePost`);