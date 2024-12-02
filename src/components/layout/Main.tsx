import { Heading, Text } from "@chakra-ui/react";
import GameGrid from "../GameGrid";

const Main = () => {
  return (
    <>
      <Heading fontSize="6xl">New and Trending</Heading>
      <Text fontSize="lg">Based on player counts and release date</Text>
      <GameGrid />
    </>
  );
};

export default Main;
