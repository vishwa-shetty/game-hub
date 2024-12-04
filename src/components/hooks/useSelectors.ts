import { Generes, Games, GameQuery } from "../../models/games";
import useData from "./useData";

// selectors for fetching Games data with Params
export const useGames = (gameQuery: GameQuery) =>
  useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery?.genere?.id,
        platform: gameQuery?.platform?.id,
        sort: gameQuery?.sort?.value,
      },
    },
    [gameQuery]
  );

// selectors for fetching Generes data
export const useGenres = () => useData<Generes>("/genres");
