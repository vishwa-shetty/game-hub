import { Button } from "@chakra-ui/react";
import { getGenre } from "../genre/useGenre";
import { getPlatForm } from "../platform/usePlatform";
import gameStore from "../../store";

const GameHeading = () => {
  const genreId = gameStore((s) => s.gameQuery.genreId);
  const platformId = gameStore((s) => s.gameQuery.platformId);
  const resetGames = gameStore((s) => s.resetGameQuery);

  const genre = getGenre(genreId);
  const platform = getPlatForm(platformId);

  return (
    <Button
      onClick={() => resetGames()}
      variant="plain"
      padding="0"
      fontSize="4xl"
    >
      {`${genre?.name || ""} ${platform?.name || ""} Games`}
    </Button>
  );
};

export default GameHeading;
