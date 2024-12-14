import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../models/games";
import { getAll } from "../services/api-client";

interface Trailer {
  id: number;
  preview: string;
  data: { 480: string; max: string };
}

export const useGameTrailer = (gameID: number) =>
  useQuery<FetchResponse<Trailer>>({
    queryKey: ["gameTrailer", gameID],
    queryFn: () => getAll(`/games/${gameID}/movies`),
  });
