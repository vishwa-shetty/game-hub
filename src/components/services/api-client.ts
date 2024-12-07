import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../../models/games";

const apiService = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "ec71a87c1022492196d10a928da946c0" },
});

export const getAll = <T>(endpoint: string, config?: AxiosRequestConfig) =>
  apiService.get<FetchResponse<T>>(endpoint, config).then((res) => res.data);
