import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.punkapi.com/v2/",
});

export const uploadBeers = async (page) => {
  return await httpClient.get(`/beers?page=${page}&per_page=24`);
};

export const uploadPizza = async (page) => {
  return await httpClient.get(`/beers?page=${page}&food=pizza&per_page=24`);
};

export const uploadSteak = async (page) => {
  return await httpClient.get(`/beers?page=${page}&food=steak&per_page=24`);
};
