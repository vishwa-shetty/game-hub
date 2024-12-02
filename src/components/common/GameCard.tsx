import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Games } from "../../models/games";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="sm" borderRadius="lg">
      <CardBody p={0}>
        <Image borderRadius="lg" src={game.background_image} />
      </CardBody>
      <HStack justifyContent={"space-between"} pr={5}>
        <CardFooter>
          <Heading fontSize="xl">{game.name}</Heading>
        </CardFooter>
        <Text>Sample text</Text>
      </HStack>
    </Card>
  );
};

export default GameCard;
