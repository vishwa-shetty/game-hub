import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React, { Suspense } from "react";
import "./App.css";
import GameGridSkelton from "./features/game/GameGridSkelton";
import GameHeading from "./features/game/GameHeading";
import PlatformSelector from "./features/platform/PlatformSelector";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SearchProvider from "./features/search/SearchContext";
import Gamegenres from "./features/genre/Genres";
import SortSelector from "./components/SortSelector";

//Lazy load heavy components
const GameGridComponent = React.lazy(() => import("./features/game/GameGrid"));

function App() {
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"sidebar"}>
            <Gamegenres />
          </GridItem>
        </Show>
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
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </SearchProvider>
  );
}

export default App;
