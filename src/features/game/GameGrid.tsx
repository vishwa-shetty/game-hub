import { SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameGridSkelton from "./GameGridSkelton";
import { useGames } from "../../hooks/useGame";
import { Link } from "react-router-dom";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const count = data?.pages.reduce((acc, page) => acc + page.results.length, 0);

  if (error) <Text>{error.message}</Text>;

  return (
    <InfiniteScroll
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={
        <VStack mt={10}>
          <Spinner color="colorPalette.600" />
          <Text color="colorPalette.600">Loading...</Text>
        </VStack>
      }
      dataLength={count || 0}
    >
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
              <Link key={gameData.id} to={`games/${gameData?.slug}`}>
                <GameCard game={gameData} />
              </Link>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
