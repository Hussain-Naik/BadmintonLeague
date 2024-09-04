import axios from "axios";

axios.defaults.baseURL = "https://script.google.com/macros/s/AKfycby2XZl1LOKULjKtZOSIxVH8BNz4DIQ2ojHWGWsIWrurh2ZGQ1ZBvZHmEOwA505Q8jgeBw/exec";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

export const axiosReq = axios.create();
