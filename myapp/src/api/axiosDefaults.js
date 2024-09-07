import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbxbeNEAokBC6j2mtLnMPYVqEpWWB1DNo8GVQ-oKpUky-5exfBX_cDaLHWQsEhf5AtIzIQ/exec"
});

const axiosReq = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbzryox8IE1bdq-AbqdPIlBKIT-iS-6c5QTJ3x4EW9wUUPN1yyA5PanuqsbxR29x6zSnVw/exec"
});

export {
    axiosAPI,
    axiosReq
  };
