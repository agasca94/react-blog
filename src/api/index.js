import { client } from './client';

export default {
    login: (email, password) => 
        client.post('login', { email, password }),

    register: (name, username, email, password) => 
        client.post('register', { name, username, email, password }),

    fetchPosts: () =>
        client.get('posts'),

    fetchPost: postId => 
        client.get(`posts/${postId}`),

    createPost: post => 
        client.post('posts', post),

    updatePost: (postId, post) => 
        client.put(`posts/${postId}`, post),

    fetchComments: (postId) => 
        client.get(`posts/${postId}/comments`),

    createComment: (postId, comment) => 
        client.post(`posts/${postId}/comments`, comment),

    getMe: params => 
        client.get('me', { params }),

    updateUser: user => 
        client.put('/me', user),

    fetchUser: username => 
        client.get(`/@${username}`)
}
