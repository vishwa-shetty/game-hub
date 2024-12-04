import { useState } from "react";
import { Grid, GridItem, Heading, HStack, Show, Text } from "@chakra-ui/react";
import { GameQuery } from "./models/games";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import GameGeneres from "./components/GameGeneres";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/common/PlatformSelector";
import SortSelector from "./components/common/SortSelector";
import "./App.css";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
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
          <GridItem area={"sidebar"} marginTop="20px">
            <GameGeneres
              selectedGeneres={gameQuery.genere}
              onSelectedGenere={(genere) =>
                setGameQuery({ ...gameQuery, genere })
              }
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <>
            <HStack justifyContent="space-between">
              <div>
                <Heading fontSize="6xl">New and Trending</Heading>
                <Text fontSize="lg">
                  Based on player counts and release date
                </Text>
              </div>
              <HStack justifyContent="space-around">
                <PlatformSelector />
                <SortSelector />
              </HStack>
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </>
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
