import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Screenshots } from "../models/games";
import { getAll } from "../services/api-client";

export const useGameScreenshots = (gameId: number) =>
  useQuery<FetchResponse<Screenshots>>({
    queryKey: ["gameScreenshots", gameId],
    queryFn: () => getAll(`/games/${gameId}/screenshots`),
  });
