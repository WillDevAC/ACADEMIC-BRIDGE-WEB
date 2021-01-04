import axios from 'axios';

const URL = 'https://academic-bridge-api.herokuapp.com';
const api = axios.create({
    baseURL: URL
});
export { URL }
export default api;
