import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../models/games";
import { getAll } from "../services/api-client";

interface Screenshots {
  id: number;
  image: string;
}

export const useGameScreenshots = (gameId: number) =>
  useQuery<FetchResponse<Screenshots>>({
    queryKey: ["gameScreenshots", gameId],
    queryFn: () => getAll(`/games/${gameId}/screenshots`),
  });
