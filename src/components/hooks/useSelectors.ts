import {
  Games,
  GameQuery,
  FetchResponse,
  Genres,
  Platform,
} from "../../models/games";
import { genresData } from "../data/genresData";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { platformData } from "../data/platformData";

export const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Games>>("/games", {
          params: {
            genres: gameQuery?.genre?.id,
            parent_platforms: gameQuery?.platform?.id,
            ordering: gameQuery?.sort?.value,
            search: gameQuery?.search,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24H
  });

// fetching Generes
export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genres>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24H
    initialData: genresData,
  });

// fetching parent platform
export const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24H
    initialData: platformData,
  });
