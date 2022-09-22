import axios from 'axios';

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url); //axios used to map UI to url of server
export const createPost = (newPost) => axios.post(url, newPost) // sending the entire new post
