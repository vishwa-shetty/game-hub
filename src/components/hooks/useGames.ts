import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Games, FetchGamesResponse } from "../../models/games";

const useGames = () => {
  const [games, setGames] = useState<Games[]>();
  const [error, setErrors] = useState();
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
