import axios from 'axios';

let token = null;
const setToken = _token => token = _token;

const instance =  axios.create({
    baseURL: 'http://localhost:5000/'
})
instance.interceptors.request.use((config) => {
    if (token)
        config.headers['Authorization'] = `Bearer ${token}`;
    return config;
});

export { 
    instance as client,
    setToken
}
