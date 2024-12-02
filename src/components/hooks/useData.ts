import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Games, Generes, UseFetchData } from "../../models/games";
import { CanceledError } from "axios";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>();
  const [error, setErrors] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<UseFetchData<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data, error, isLoading };
};

// selectors for fetching data
export const useGames = () => useData<Games>("/games");
export const useGenres = () => useData<Generes>("/genres");

export default useData;
