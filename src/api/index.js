import { client } from './client';

export default {
    login: (email, password) => 
        client.post('login', { email, password }),

    register: (name, username, email, password) => 
        client.post('register', { name, username, email, password }),

    fetchPost: (postId) => 
        client.get(`posts/${postId}`),

    createPost: (post) => 
        client.post('posts', post),

    updatePost: (postId, post) => 
        client.put(`posts/${postId}`, post),
}
