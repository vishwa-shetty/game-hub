import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./common/GameCard";
import GameGridSkelton from "./common/GameGridSkelton";
import { GameQuery } from "../models/games";
import { useGames } from "./hooks/useSelectors";

interface Props {
  // selectedGenere: Generes | null;
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

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
