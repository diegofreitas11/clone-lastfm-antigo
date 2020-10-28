import Axios from 'axios';

const API_KEY = '87388aa0974f3cc9ddf2e4adac39a39e';

const api = Axios.create({
    baseURL: `http://ws.audioscrobbler.com/2.0/` 
})

export default api;