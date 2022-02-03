import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 60000;

export const GET = async (url) => {
    return await axios.get(url);
}

export const PUT = async (url, data) => {
    return await axios.put(url, data);
}

export const POST = async (url, data) => {
    return await axios.post(url, data);
}

export const DELETE = async (url, data) => {
    return await axios.delete(url, data);
}