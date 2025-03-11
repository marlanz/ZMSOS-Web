import { request } from "http";
import { createAnimalTypeSearchModel } from "../models/AnimalType";
import baseApi from "./BaseApi";

/**
 * Extract data from an Axios response
 * @param {Object} response - The Axios response object
 * @returns {*} The data from the response
 */
const responseBody = (response) => response.data;

const requests = {
  // * set up for api with auth credentials
  // get: (url, params) =>
  //   apiJWT.get(url, { params }).then(responseBody),
  // post: (url, body) => apiJWT.post(url, body).then(responseBody),
  // put: (url, body) => apiJWT.put(url, body).then(responseBody),
  // del: (url, params) =>
  //   apiJWT.delete(url, { params }).then(responseBody),
  baseApiGet: (url, params) => baseApi.get(url, { params }).then(responseBody),
  baseApiPost: (url, body) => baseApi.post(url, body).then(responseBody),
  baseApiPut: (url, body) => baseApi.put(url, body).then(responseBody),
  baseApiPatch: (url, body) => baseApi.patch(url, body).then(responseBody),
  baseApiDelete: (url, params) =>
    baseApi.delete(url, { params }).then(responseBody),
};

// Animal Type
const Animal = {
  getAnimalTypes: () => requests.baseApiGet("/AnimalType/animalTypes"),
  postAnimalTypesSearchSortPaging: (searchParams) => {
    const requestBody = createAnimalTypeSearchModel(searchParams);
    return requests.baseApiPost(
      "/AnimalType/animalTypes/search-sort-paging",
      requestBody
    );
  },
  getAnimalTypesDetail: (id) =>
    requests.baseApiGet(`/AnimalType/animalType/id?id=${id}`),
  postAnimalTypes: (requestBody) =>
    requests.baseApiPost("/AnimalType/animalType", requestBody),
  putAnimalTypes: (requestBody) =>
    requests.baseApiPut("/AnimalType/animalType", requestBody),
};
const agent = {
  Animal,
};
export default agent;
