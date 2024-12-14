import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Trailer } from "../models/games";
import { getAll } from "../services/api-client";

export const useGameTrailer = (gameID: number) =>
  useQuery<FetchResponse<Trailer>>({
    queryKey: ["gameTrailer", gameID],
    queryFn: () => getAll(`/games/${gameID}/movies`),
  });
