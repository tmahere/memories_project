import axios from 'axios';

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url);

//redux is used to make api calls to ur backend server
