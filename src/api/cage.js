import axios from "axios";
import { BASE_URL } from "../constants/otherConstant";

export const createCage = async (body) => {
  try {
    const response = await axios.post(`${BASE_URL}/Cage/cage`, body);
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAllCages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Cage/cages`);
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getCageById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/Cage/cage/id?id=${id}`);
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};
