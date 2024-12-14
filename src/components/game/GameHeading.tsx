import { Button, Grid } from "@chakra-ui/react";
import { getGenre } from "../../hooks/useGenre";
import gameStore from "../../store";

const GameHeading = () => {
  const genreId = gameStore((s) => s.gameQuery.genreId);
  const resetGames = gameStore((s) => s.resetGameQuery);

  const genre = getGenre(genreId);

  return (
    <Grid>
      <Button
        onClick={() => resetGames()}
        variant="plain"
        padding="0"
        fontSize={{ base: "xl", lg: "2xl", xl: "4xl" }}
        justifyContent="left"
        marginBottom="10px"
        whiteSpace="normal"
        textAlign="left"
      >
        {`${genre?.name || ""} Games`}
      </Button>
    </Grid>
  );
};

export default GameHeading;
