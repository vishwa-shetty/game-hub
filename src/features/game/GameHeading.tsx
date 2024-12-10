import { Button } from "@chakra-ui/react";
import { GameQuery } from "../../models/games";
import { Dispatch, SetStateAction } from "react";
import { getGenre } from "../genre/useGenre";
import { getPlatForm } from "../platform/usePlatform";

interface Props {
  gameQuery: GameQuery | null;
  setGameQuery: Dispatch<SetStateAction<GameQuery>>;
}

const GameHeading = ({ gameQuery, setGameQuery }: Props) => {
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
