import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./common/GameCard";
import GameGridSkelton from "./common/GameGridSkelton";
import { GameQuery } from "../models/games";
import { useGames } from "./hooks/useSelectors";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);

  return (
    <div>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        column={3}
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        mt={5}
      >
        {data && data?.pages?.length <= 0 && <Text>No Games Found.</Text>}
        {isLoading && <GameGridSkelton />}
        {data?.pages.map((game, index) => (
          <React.Fragment key={index}>
            {game?.results.map((gameData) => (
              <GameCard key={gameData.id} game={gameData} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} mt={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
};

export default GameGrid;
