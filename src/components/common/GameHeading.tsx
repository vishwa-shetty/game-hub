import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../models/games";
import { getGenre } from "../hooks/useGenre";
import { getPlatForm } from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery | null;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = getGenre(gameQuery?.genreId);
  const platform = getPlatForm(gameQuery?.platformId);

  return (
    <Heading fontSize="4xl">{`${genre?.name || ""} ${
      platform?.name || ""
    } Games`}</Heading>
  );
};

export default GameHeading;
