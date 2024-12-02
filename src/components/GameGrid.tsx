import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./common/GameCard";
import GameCardSkelton from "./common/skeltons/GameCardSkelton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const gameArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      {error && <Text>error</Text>}
      <SimpleGrid
        column={3}
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        mt={5}
      >
        {isLoading && gameArray.map((game) => <GameCardSkelton key={game} />)}
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
