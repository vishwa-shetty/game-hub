import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Games } from "../../models/games";
import CriticScore from "../../components/CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import Platform from "../platform/Platform";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="sm" borderRadius="lg">
      <CardHeader p={0}>
        <Image
          borderRadius="lg"
          minHeight="250px"
          src={getCroppedImageUrl(game.background_image)}
        />
      </CardHeader>
      <CardBody>
        <HStack>
          <Platform
            gamePlatforms={game?.parent_platforms?.map((item) => item.platform)}
          />
        </HStack>
      </CardBody>
      <CardFooter maxW="full" paddingTop={0}>
        <HStack justifyContent="space-between" minWidth="100%">
          <Heading fontSize="xl">{game.name}</Heading>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
