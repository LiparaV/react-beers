import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.punkapi.com/v2",
});

export const uploadBeers = async(page) => {
    return await httpClient.get(`/beers?page=${page}&per_page=12`)
}

