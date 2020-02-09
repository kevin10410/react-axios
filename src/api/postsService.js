import axios from 'axios';

export const getAllPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');
export const getPost = (postId) => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
export const getPostComments = (postId) => axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
export const getPostsByUserId = (userId) => axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
export const postNewPost = (postInfo) => axios.post('https://jsonplaceholder.typicode.com/posts', postInfo);
export const putPost = (postId, postInfo) => axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, postInfo);
