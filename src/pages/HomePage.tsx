import { Grid, GridItem, HStack } from "@chakra-ui/react";
import React, { Suspense } from "react";
import SortSelector from "../components/SortSelector";
import GameGridSkelton from "../features/game/GameGridSkelton";
import GameHeading from "../features/game/GameHeading";
import Gamegenres from "../features/genre/Genres";
import PlatformSelector from "../features/platform/PlatformSelector";

const HomePage = () => {
  const GameGridComponent = React.lazy(
    () => import("../features/game/GameGrid")
  );

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"sidebar main"`,
      }}
      gridTemplateColumns={{ base: "1fr", lg: "250px 1fr" }} // Adjust column sizes
      //   gridTemplateRows="1fr 250px auto"
      gap="4"
      minHeight="100vh"
    >
      <GridItem area={"sidebar"}>
        <Gamegenres />
      </GridItem>
      <GridItem area={"main"}>
        <>
          <HStack justifyContent="space-between">
            <GameHeading />
            <HStack justifyContent="space-around">
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </HStack>
          <Suspense fallback={<GameGridSkelton />}>
            <GameGridComponent />
          </Suspense>
        </>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
