import {
  Games,
  GameQuery,
  FetchResponse,
  Genres,
  Platform,
} from "../../models/games";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../services/api-client";
import { genresData } from "../data/genresData";
import { platformData } from "../data/platformData";

export const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      getAll<Games>("/games", {
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sort?.value,
          search: gameQuery?.search,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, //24H
  });

// fetching Generes
export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => getAll<Genres>("/genres"),
    staleTime: 24 * 60 * 60 * 1000, //24H
    initialData: genresData,
  });

export const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => getAll<Platform>("/platforms/lists/parents"),
    staleTime: 24 * 60 * 60 * 1000, //24H
    initialData: platformData,
  });
