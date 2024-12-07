import {
  Games,
  GameQuery,
  Platform,
  UseFetchData,
  Genres,
} from "../../models/games";
import useData from "./useData";
import { genres } from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

// selectors for fetching Games with Params
export const useGames = (gameQuery: GameQuery) =>
  useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sort?.value,
        search: gameQuery?.search,
      },
    },
    [gameQuery]
  );

// fetching Generes
export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<UseFetchData<Genres>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24H
    initialData: genres,
  });

// fetching parent platform
export const usePlatform = () => useData<Platform>("/platforms/lists/parents");
