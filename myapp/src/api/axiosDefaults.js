import axios from "axios";

axios.defaults.baseURL = "https://script.google.com/macros/s/AKfycbz8loqyuTAf4sDGuFvmFqUTCQx1lG-rXle71GsY-CJylJZUzVMJj8N09LdTrPviuZKgxw/exec";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

export const axiosReq = axios.create();