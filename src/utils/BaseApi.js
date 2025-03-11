import axios from "axios";
import { BASE_URL } from "../constants/otherConstant";
const BaseURL = BASE_URL;
const baseApi = axios.create({
  BaseURL,
  withCredentials: true,
});

export default baseApi;
