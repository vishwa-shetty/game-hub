import { Button } from "@chakra-ui/react";
import { GameQuery } from "../../models/games";
import { getGenre } from "../hooks/useGenre";
import { getPlatForm } from "../hooks/usePlatform";
import { Dispatch, SetStateAction, useContext } from "react";
import { SearchContext, SearchContextType } from "../../context/SearchContext";

interface Props {
  gameQuery: GameQuery | null;
  setGameQuery: Dispatch<SetStateAction<GameQuery>>;
}

const GameHeading = ({ gameQuery, setGameQuery }: Props) => {
  const genre = getGenre(gameQuery?.genreId);
  const platform = getPlatForm(gameQuery?.platformId);
  const { searchValue } = useContext(SearchContext) as SearchContextType;

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
      {`'${searchValue}' ${genre?.name || ""} ${platform?.name || ""} Games`}
    </Button>
  );
};

export default GameHeading;
