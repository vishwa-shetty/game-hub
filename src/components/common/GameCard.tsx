import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Games } from "../../models/games";
import Platform from "./Platform";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="sm" borderRadius="lg">
      <CardHeader p={0}>
        <Image borderRadius="lg" src={game.background_image} />
      </CardHeader>
      <CardBody>
        <HStack>
          <Platform
            gamePlatforms={game.parent_platforms.map((item) => item.platform)}
          />
        </HStack>
      </CardBody>
      <CardFooter paddingTop={0}>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
