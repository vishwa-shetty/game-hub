import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery, FetchResponse, Games } from "../../models/games";
import { getAll } from "../services/api-client";

export const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      getAll("/games", {
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sort,
          search: gameQuery?.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24H
  });
