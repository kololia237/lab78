import axios from 'axios';

const instance = axios.create({
    baseURL: '/', // Через nginx
});

export default instance;
