import axios from "axios";

const API_URL = 'https://training.softech.cloud/api/training';
axios.defaults.baseURL = API_URL;

export default axios;