import axios from "axios";
const BASE_URL = "http://localhost:5200/api";

export const fetchAllTypes = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/Animal/animals`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
