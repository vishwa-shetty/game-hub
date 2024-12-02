import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./common/GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <div>
      {error && <Text>error</Text>}
      <SimpleGrid
        column={3}
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
