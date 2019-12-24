import axios from 'axios';

const instance =  axios.create({
    baseURL: 'http://localhost:5000/'
})

export default {
    login: (email, password) => 
    //instance.post('login', { email, password })
        Promise.resolve({
            data: {
                username: 'jethrotull',
                token: 'a1a1'
            }
        }),

    register: (name, username, email, password) => 
        //instance.post('register', { name, username, email, password })
        Promise.resolve({
            data: {
                username, 
                token: 'a1a1'
            }
        })
}
