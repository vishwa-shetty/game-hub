import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../models/games";
const gameKey = import.meta.env.VITE_RAW_API_KEY;

const apiService = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: gameKey },
});

export const getAll = <T>(endpoint: string, config?: AxiosRequestConfig) =>
  apiService.get<FetchResponse<T>>(endpoint, config).then((res) => res.data);

export const get = <T>(endpoint: string) =>
  apiService.get<T>(endpoint).then((res) => res.data);
