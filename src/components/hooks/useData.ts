import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Games, Generes, UseFetchData } from "../../models/games";
import { CanceledError } from "axios";

const useData = <T>(
  endpoint: string,
  selectedGenere?: Generes | null,
  dep?: any[]
) => {
  const [data, setData] = useState<T[]>();
  const [error, setErrors] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<UseFetchData<T>>(endpoint, {
          signal: controller.signal,
          params: { genres: selectedGenere?.id },
        })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErrors(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    dep ? [...dep] : []
  );

  return { data, error, isLoading };
};

// selectors for fetching data
export const useGames = (selectedGenere: Generes | null) =>
  useData<Games>("/games", selectedGenere, [selectedGenere]);
export const useGenres = () => useData<Generes>("/genres");

export default useData;
