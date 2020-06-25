import axios from 'axios';
import {config} from 'dotenv';

const api = axios.create({
    baseURL:  "https://groove-signer.herokuapp.com",
});

export default api;