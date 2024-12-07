import { Games, GameQuery, Platform } from "../../models/games";
import useData from "./useData";
import { generes } from "../data/generes";

// selectors for fetching Games with Params
export const useGames = (gameQuery: GameQuery) =>
  useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery?.genere?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sort?.value,
        search: gameQuery?.search,
      },
    },
    [gameQuery]
  );

// fetching Generes
export const useGenres = () => ({
  data: generes,
  error: null,
  isLoading: null,
});

// fetching parent platform
export const usePlatform = () => useData<Platform>("/platforms/lists/parents");
