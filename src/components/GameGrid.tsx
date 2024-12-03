import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "./hooks/useData";
import GameCard from "./common/GameCard";
import GameGridSkelton from "./common/GameGridSkelton";
import { Generes } from "../models/games";

interface Props {
  selectedGenere: Generes | null;
}

const GameGrid = ({ selectedGenere }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenere);

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
