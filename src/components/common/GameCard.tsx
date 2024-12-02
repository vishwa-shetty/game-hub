import {
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Games } from "../../models/games";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardBody>
        <Image src={game.background_image} />
      </CardBody>
      <CardFooter>{game.name}</CardFooter>
    </Card>
  );
};

export default GameCard;
