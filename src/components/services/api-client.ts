import axios from "axios";
import { FetchResponse, GameQuery } from "../../models/games";

const apiService = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "ec71a87c1022492196d10a928da946c0" },
});

export const getAll = <T>(endpoint: string, gameQuery?: GameQuery) =>
  apiService
    .get<FetchResponse<T>>(endpoint, {
      params: {
        genres: gameQuery?.genre?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sort?.value,
        search: gameQuery?.search,
      },
    })
    .then((res) => res.data);
