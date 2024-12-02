import { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import { CanceledError } from "axios";
import { Text } from "@chakra-ui/react";

interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  results: Games[];
  count: number;
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>();
  const [error, setErrors] = useState();

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/xgames", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <div>
      {error && <Text>error</Text>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
