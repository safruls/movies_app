import axios from "axios";

export const axiosRequestInstance = () => {
  const baseUrl = `http://www.omdbapi.com`;
  return axios.create({
    baseURL: baseUrl,
  });
};
