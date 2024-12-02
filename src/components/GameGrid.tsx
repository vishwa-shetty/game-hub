import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "./hooks/useData";
import GameCard from "./common/GameCard";
import GameGridSkelton from "./common/GameGridSkelton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  return (
    <div>
      {error && <Text>error</Text>}
      <SimpleGrid
        column={3}
        spacing={10}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        mt={5}
      >
        {isLoading && <GameGridSkelton count={data?.length ?? 9} />}
        {data?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
