import axios from "axios";
import { BASE_URL } from "../constants/otherConstant";

export const getAllAreas = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ZooArea/zooAreas`);
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAreaById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/ZooArea/zooArea/${id}`);
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteArea = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/ZooArea/zooArea/${id}`);
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};
