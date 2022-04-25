import axios from "axios";

const instance = axios.create({
    baseURL: 'https://martinsfirstapi.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin' : '*'

    }
})

export default instance;
