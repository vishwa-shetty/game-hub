import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React, { Suspense, useState } from "react";
import "./App.css";
import GameGridSkelton from "./features/game/GameGridSkelton";
import GameHeading from "./features/game/GameHeading";
import PlatformSelector from "./features/platform/PlatformSelector";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SearchProvider from "./features/search/SearchContext";
import { GameQuery, Sort } from "./models/games";
import Gamegenres from "./features/genre/Genres";
import SortSelector from "./components/SortSelector";

//Lazy load heavy components
const GameGridComponent = React.lazy(() => import("./features/game/GameGrid"));

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <SearchProvider>
      <Grid
        templateAreas={{
          base: `"nav" 
           "main"
           "footer"`,
          lg: `"nav nav"
         "sidebar main"
         "footer footer"`,
        }}
        gridTemplateColumns={{ base: "1fr", lg: "250px 1fr" }} // Adjust column sizes
        gridTemplateRows="auto 1fr auto"
        gap="4"
        minHeight="100vh"
      >
        <GridItem area={"nav"}>
          <NavBar gameQuery={gameQuery} setGameQuery={setGameQuery} />
        </GridItem>
        <Show above="lg">
          <GridItem area={"sidebar"}>
            <Gamegenres
              selectedgenreID={gameQuery.genreId}
              onSelectedgenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre?.id })
              }
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <>
            <HStack justifyContent="space-between">
              <GameHeading gameQuery={gameQuery} setGameQuery={setGameQuery} />
              <HStack justifyContent="space-around">
                <PlatformSelector
                  selectPlatformId={gameQuery.platformId}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platformId: platform?.id })
                  }
                />
                <SortSelector
                  selectedSortValue={gameQuery?.sort}
                  onSelectedSort={(sort: Sort) =>
                    setGameQuery({ ...gameQuery, sort: sort.value })
                  }
                />
              </HStack>
            </HStack>
            <Suspense fallback={<GameGridSkelton />}>
              <GameGridComponent gameQuery={gameQuery} />
            </Suspense>
          </>
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </SearchProvider>
  );
}

export default App;
