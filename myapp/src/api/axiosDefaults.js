import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbxbeNEAokBC6j2mtLnMPYVqEpWWB1DNo8GVQ-oKpUky-5exfBX_cDaLHWQsEhf5AtIzIQ/exec"
});

const axiosReq = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbyB2o8wqzU54CY_ecQcGCXD47irrqLLBA7r5U0ch6qZr1rVIec8kutmpwh4BUYkit797Q/exec"
});

export {
    axiosAPI,
    axiosReq
  };
