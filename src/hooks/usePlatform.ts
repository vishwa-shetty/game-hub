import { useQuery } from "@tanstack/react-query";
import { Platform } from "../models/games";
import { platformData } from "../features/platform/data";
import { getAll } from "../services/api-client";

export const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => getAll<Platform>("/platforms/lists/parents"),
    staleTime: 24 * 60 * 60 * 1000, //24H
    initialData: platformData,
  });

export const getPlatForm = (id?: number) => {
  const { data } = usePlatform();
  return data.results.find((d) => d.id === id);
};
