import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbxbeNEAokBC6j2mtLnMPYVqEpWWB1DNo8GVQ-oKpUky-5exfBX_cDaLHWQsEhf5AtIzIQ/exec"
});

const axiosReq = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbxpQ3Yb7-0UE5bEXyn-PTTF0cmfKCPJ4sGI5MHdfgYpZeDD9a3bQ-t1jJcCN2G_qWKUWw/exec"
});

export {
    axiosAPI,
    axiosReq
  };
