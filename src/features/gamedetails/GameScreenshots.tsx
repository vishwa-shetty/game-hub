import { Image, SimpleGrid } from "@chakra-ui/react";
import GameSpinner from "../../components/GameSpinner";
import { useGameScreenshots } from "../../hooks/useGameScreenshots";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const {
    data: gameScreenshots,
    isLoading,
    error,
  } = useGameScreenshots(gameId);

  if (isLoading) return <GameSpinner />;

  if (error || !gameScreenshots) throw error;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      paddingY={10}
      justifyContent="left"
      spacing={5}
    >
      {gameScreenshots.results?.map((screen) => (
        <Image key={screen.id} src={getCroppedImageUrl(screen.image)} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
