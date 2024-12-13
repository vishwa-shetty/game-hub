import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse, Games } from "../models/games";
import { getAll } from "../services/api-client";
import gameStore from "../store";

export const useGames = () => {
  const gameQuery = gameStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      getAll("/games", {
        params: {
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24H,
    cacheTime: 24 * 60 * 60 * 1000,
  });
};
