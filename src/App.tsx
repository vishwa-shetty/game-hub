import "./App.css";
import { Grid, GridItem, Show, theme } from "@chakra-ui/react";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

function App() {
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
          <GridItem area={"sidebar"}>
            <SideBar />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Main />
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
