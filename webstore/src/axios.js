import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/ecom-website-c97b3/us-central1/api'
    //The API {cloud function} URl

});

export default instance;