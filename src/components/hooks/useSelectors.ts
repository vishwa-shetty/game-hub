import { Generes, Games, GameQuery, Platform } from "../../models/games";
import useData from "./useData";

// selectors for fetching Games with Params
export const useGames = (gameQuery: GameQuery) =>
  useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery?.genere?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sort,
      },
    },
    [gameQuery]
  );

// fetching Generes
export const useGenres = () => useData<Generes>("/genres");

// fetching parent platform
export const usePlatform = () => useData<Platform>("/platforms/lists/parents");
