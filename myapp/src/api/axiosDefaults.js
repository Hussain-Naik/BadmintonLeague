import axios from "axios";

const axiosReq = axios.create({
    baseURL: "https://script.google.com/macros/s/AKfycbyCV1fMShc7SKVFqJ18ar22SltWWWvLYAitoWwiuLW1PnN_cagY8aTdUrsSQoefgzw21A"
});

export {
    axiosReq
  };
