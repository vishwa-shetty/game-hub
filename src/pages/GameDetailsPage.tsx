import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import ExpandableText from "../components/ExpandableText";
import GameSpinner from "../components/GameSpinner";
import GameAttributes from "../features/gamedetails/GameAttributes";
import GameScreenshots from "../features/gamedetails/GameScreenshots";
import GameTrailer from "../features/gamedetails/GameTrailer";
import { useGameDetails } from "../hooks/useGameDetails";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <GameSpinner />;

  if (error || !game) throw error;

  return (
    <>
      <BreadCrumb />
      <SimpleGrid columns={{ base: 1, md: 2 }} marginTop="20px" gap={5}>
        <GridItem>
          <Heading size="xl">{game.name}</Heading>
          <ExpandableText text={game.description_raw?.substring(0, 600)} />
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
        </GridItem>
      </SimpleGrid>
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailsPage;
