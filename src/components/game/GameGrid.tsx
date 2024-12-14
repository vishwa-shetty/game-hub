import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import GameSpinner from "../common/GameSpinner";
import { useGames } from "../../hooks/useGame";
import GameCard from "./GameCard";
import GameGridSkelton from "./GameGridSkelton";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const count = data?.pages.reduce((acc, page) => acc + page.results.length, 0);

  if (error) <Text>{error.message}</Text>;

  return (
    <InfiniteScroll
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<GameSpinner />}
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
