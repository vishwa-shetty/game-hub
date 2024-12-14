import GameSpinner from "../common/GameSpinner";
import { useGameTrailer } from "../../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: gameTrailer, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return <GameSpinner />;

  if (error || !gameTrailer) throw error;

  return (
    <>
      <video
        width={"100%"}
        height={"100%"}
        src={gameTrailer.results[0]?.data[480]}
        controls
      />
    </>
  );
};

export default GameTrailer;
