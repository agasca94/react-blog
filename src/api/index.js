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

    favoritePost: postId => 
        client.post(`posts/${postId}/favorite`),

    unfavoritePost: postId => 
        client.delete(`posts/${postId}/favorite`),

    deletePost: postId => 
        client.delete(`posts/${postId}`),

    fetchComments: (postId) => 
        client.get(`posts/${postId}/comments`),

    createComment: (postId, comment) => 
        client.post(`posts/${postId}/comments`, comment),
    
    updateComment: (postId, commentId, comment) => 
        client.put(`posts/${postId}/comments/${commentId}`, comment),

    deleteComment: (postId, commentId) => 
        client.delete(`posts/${postId}/comments/${commentId}`),

    getMe: params => 
        client.get('me', { params }),

    updateUser: user => 
        client.put('/me', user),

    fetchUser: username => 
        client.get(`/@${username}`),

    fetchUserPosts: username => 
        client.get(`/@username/posts`)
}
