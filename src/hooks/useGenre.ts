import { useQuery } from "@tanstack/react-query";
import { Genres } from "../models/games";
import { genresData } from "../components/genre/data";
import { getAll } from "../services/api-client";

export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => getAll<Genres>("/genres"),
    staleTime: 24 * 60 * 60 * 1000, //24H
    initialData: genresData,
  });

export const getGenre = (id?: number) => {
  const { data } = useGenres();
  return data.results.find((d) => d.id === id);
};
