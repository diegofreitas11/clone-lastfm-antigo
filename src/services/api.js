import Axios from 'axios';

const api = Axios.create({
    baseURL: `http://ws.audioscrobbler.com/2.0/` 
})

export default api;