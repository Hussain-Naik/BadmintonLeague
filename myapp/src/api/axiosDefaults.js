import axios from "axios";

axios.defaults.baseURL = "https://script.google.com/macros/s/AKfycbyUEhT9WcnKAgikb0kFQ5S1plMGP5RHZt_eh5WmpfmwzsUmGc6Q8K9jCBFOftcLWiddsg/exec";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();