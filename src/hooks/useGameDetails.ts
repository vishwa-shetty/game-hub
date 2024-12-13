import { useQuery } from "@tanstack/react-query";
import { get } from "../services/api-client";
import { GameDetails } from "../models/games";

export const useGameDetails = (slug: string) => {
  return useQuery<GameDetails>({
    queryKey: ["gameDetails", slug],
    queryFn: () => get(`/games/${slug}`),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};
