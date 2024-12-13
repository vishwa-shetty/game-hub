import { SimpleGrid, Text, Link } from "@chakra-ui/react";
import { GameDetails } from "../models/games";
import CriticScore from "./CriticScore";
import DefinationTerms from "./DefinationTerms";

interface Props {
  game: GameDetails;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={3} as="dl">
      <DefinationTerms terms="Platforms">
        {game?.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationTerms>

      <DefinationTerms terms="Genres">
        {game?.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinationTerms>
      <DefinationTerms terms="Publishers">
        {game?.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinationTerms>
      <DefinationTerms terms="Ratings">
        <CriticScore score={game?.rating} />
      </DefinationTerms>
      <DefinationTerms terms="Released">
        <Text>{game?.released}</Text>
      </DefinationTerms>
      <DefinationTerms terms="Website">
        <Link href={game?.website} target="_blank">
          {game?.website}
        </Link>
      </DefinationTerms>
    </SimpleGrid>
  );
};

export default GameAttributes;
