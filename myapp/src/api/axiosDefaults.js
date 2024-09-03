import axios from "axios";

axios.defaults.baseURL = "https://script.googleusercontent.com/macros/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

export const axiosReq = axios.create();
export const sLeague = "echo?user_content_key=CJcJS8P4f5cUxYzkjJN2NEAGZ4K3Usb8yzZTu79fjJYyJML0XweJB69OBoJKjwbjQyLivdb1sFTe-IT6VLMQMdVX4XnP89N5OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa4pu9UtqVsEBc71S9Ynj7kKGs-haLllLlyJfGOpDP0hT4M0OcvK6j1vYXklash6-RVqHVNq0UeR14fC-ONPV6vJyFGqtn1e25fekoa_Y_UXNWvUNMAuXVoesIOjAvMyVEQ&lib=MvuG5FbZ9Ih0m65UZeMDjEnnTekkrBEjA";
export const sSessions = null
export const sPlayers = null
export const sParticipants = null
export const sMatch = null
export const sFixtures = null