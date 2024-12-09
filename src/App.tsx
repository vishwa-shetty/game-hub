import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React, { Suspense, useState } from "react";
import "./App.css";
import Gamegenres from "./components/GameGenres";
import GameGridSkelton from "./components/common/GameGridSkelton";
import GameHeading from "./components/common/GameHeading";
import PlatformSelector from "./components/common/PlatformSelector";
import SortSelector from "./components/common/SortSelector";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import SearchProvider from "./context/SearchContext";
import { GameQuery, Sort } from "./models/games";

//Lazy load heavy components
const GameGridComponent = React.lazy(() => import("./components/GameGrid"));

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
