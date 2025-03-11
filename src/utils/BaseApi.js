// import axios from "axios";
// const baseApi = "https://api.zmsos.xyz/api";
// const baseApi = axios.create({
//   BaseURL,
//   withCredentials: true,
// });

import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://api.zmsos.xyz/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseApi;
