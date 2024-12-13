import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameSpinner from "../components/GameSpinner";
import { useGameDetails } from "../hooks/useGameDetails";
import getCroppedImageUrl from "../services/image-url";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <GameSpinner />;

  if (error || !game) throw error;

  return (
    <>
      <BreadCrumb />

      <Box marginTop="20px">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="unstyled"
        >
          <Image
            objectFit="cover"
            // width="100%"
            width={{ base: "100%", lg: "500px" }}
            height={{ base: "100%", lg: "500px" }}
            src={game?.background_image}
            alt={game?.name}
            paddingRight={10}
          />

          <Stack>
            <CardBody>
              <Heading size="xl">{game?.name}</Heading>
              <Box height="150px">
                <ExpandableText
                  text={game?.description_raw?.substring(0, 600)}
                  website={game?.website}
                />
              </Box>
              <GameAttributes game={game} />
            </CardBody>
            <CardFooter></CardFooter>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default GameDetailsPage;
