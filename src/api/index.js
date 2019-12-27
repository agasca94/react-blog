import axios from 'axios';

const instance =  axios.create({
    baseURL: 'http://localhost:5000/'
})

export default {
    login: (email, password) => 
        instance.post('login', { email, password }),

    register: (name, username, email, password) => 
        instance.post('register', { name, username, email, password })
}
