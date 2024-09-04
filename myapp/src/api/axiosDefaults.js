import axios from "axios";

axios.defaults.baseURL = "https://script.google.com/macros/s/AKfycbxbeNEAokBC6j2mtLnMPYVqEpWWB1DNo8GVQ-oKpUky-5exfBX_cDaLHWQsEhf5AtIzIQ/exec";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

export const axiosReq = axios.create();
