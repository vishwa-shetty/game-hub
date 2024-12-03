import "./App.css";
import { Grid, GridItem, Heading, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import GameGeneres from "./components/GameGeneres";
import { useState } from "react";
import { Generes } from "./models/games";
import GameGrid from "./components/GameGrid";

function App() {
  const [selectedGenere, setSelectedGenere] = useState<Generes | null>(null);
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
              selectedGeneres={selectedGenere}
              onSelectedGenere={(generes) => setSelectedGenere(generes)}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <>
            <Heading fontSize="6xl">New and Trending</Heading>
            <Text fontSize="lg">Based on player counts and release date</Text>
            <GameGrid selectedGenere={selectedGenere} />
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
