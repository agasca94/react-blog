import axios from 'axios';

const instance =  axios.create({
    baseURL: 'http://localhost:5000/'
})

export default {
    login: (email, password) => 
        instance.post('login', { email, password }),

    register: (name, username, email, password) => 
        instance.post('register', { name, username, email, password }),

    fetchPost: (postId) => 
        Promise.resolve({
            data: {
                title: 'A title',
                contents: 'Something'
            }
        }),
    //instance.get(`posts/${postId}`),

    createPost: (post) => 
        instance.post('posts', post),

    updatePost: (postId, post) => 
        instance.put(`posts/${postId}`, post)
}
