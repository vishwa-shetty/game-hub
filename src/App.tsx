import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          <NavBar />
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          <SideBar />
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          <Main />
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
