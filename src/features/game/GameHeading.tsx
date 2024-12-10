import { Button } from "@chakra-ui/react";
import { getGenre } from "../genre/useGenre";
import { getPlatForm } from "../platform/usePlatform";

const GameHeading = ({ gameQuery, setGameQuery }: any) => {
  const genre = getGenre(gameQuery?.genreId);
  const platform = getPlatForm(gameQuery?.platformId);

  return (
    <Button
      onClick={() =>
        setGameQuery({
          ...gameQuery,
          sort: undefined,
          genreId: undefined,
          platformId: undefined,
        })
      }
      variant="plain"
      padding="0"
      fontSize="4xl"
    >
      {`${genre?.name || ""} ${platform?.name || ""} Games`}
    </Button>
  );
};

export default GameHeading;
