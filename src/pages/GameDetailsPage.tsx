import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { useGameDetails } from "../hooks/useGameDetails";
import {
  Box,
  Link,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinationTerms from "../components/DefinationTerms";
import CriticScore from "../components/CriticScore";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data } = useGameDetails(slug!);
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
            src={data?.background_image}
            alt={data?.name}
            paddingRight={10}
          />

          <Stack>
            <CardBody>
              <Heading size="xl">{data?.name}</Heading>
              <Box height="150px">
                <ExpandableText
                  text={data?.description_raw?.substring(0, 600)}
                  website={data?.website}
                />
              </Box>
              <SimpleGrid columns={3} as="dl">
                <DefinationTerms terms="Platforms">
                  {data?.parent_platforms?.map(({ platform }) => (
                    <Text key={platform.id}>{platform.name}</Text>
                  ))}
                </DefinationTerms>

                <DefinationTerms terms="Genres">
                  {data?.genres?.map((genre) => (
                    <Text key={genre.id}>{genre.name}</Text>
                  ))}
                </DefinationTerms>
                <DefinationTerms terms="Publishers">
                  {data?.publishers?.map((p) => (
                    <Text key={p.id}>{p.name}</Text>
                  ))}
                </DefinationTerms>
                <DefinationTerms terms="Metascore">
                  <CriticScore score={data?.metacritic} />
                </DefinationTerms>
                <DefinationTerms terms="Released">
                  <Text>{data?.released}</Text>
                </DefinationTerms>
                <DefinationTerms terms="Website">
                  <Link href={data?.website} target="_blank">
                    {data?.website}
                  </Link>
                </DefinationTerms>
              </SimpleGrid>
            </CardBody>
            <CardFooter></CardFooter>
          </Stack>
        </Card>
      </Box>
    </>
  );
};

export default GameDetailsPage;
