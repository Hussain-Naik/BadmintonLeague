import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbxbeNEAokBC6j2mtLnMPYVqEpWWB1DNo8GVQ-oKpUky-5exfBX_cDaLHWQsEhf5AtIzIQ/exec"
});

const axiosReq = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbxbeNEAokBC6j2mtLnMPYVqEpWWB1DNo8GVQ-oKpUky-5exfBX_cDaLHWQsEhf5AtIzIQ/exec"
});

export {
    axiosAPI,
    axiosReq
  };
