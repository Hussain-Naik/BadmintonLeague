import axios from "axios";

axios.defaults.baseURL = "https://pp5-synergy.onrender.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();