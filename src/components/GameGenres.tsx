import {
  HStack,
  List,
  ListItem,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Genres } from "../models/games";
import getCroppedImageUrl from "./services/image-url";
import { useGenres } from "./hooks/useSelectors";
import GamegenresSkelton from "./common/GameGenresSkelton";

interface Props {
  onSelectedgenre: (genres: Genres | null) => void;
  selectedgenres: Genres | null;
}

const Gamegenres = ({ onSelectedgenre, selectedgenres }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <GamegenresSkelton />;
  return (
    <>
      <Heading marginBottom="20px">genres</Heading>
      <List>
        {data?.results.map((genres) => (
          <ListItem key={genres.id} marginBottom="5px">
            <HStack>
              <Image
                boxSize="40px"
                height="40px"
                objectFit="cover"
                borderRadius="lg"
                src={getCroppedImageUrl(genres.image_background)}
              />
              <Button
                style={
                  selectedgenres?.id === genres.id
                    ? { fontWeight: "bold", textDecoration: "underline" }
                    : { fontWeight: "normal", textDecoration: "none" }
                }
                variant="link"
                onClick={() => onSelectedgenre(genres)}
                whiteSpace="normal"
                textAlign="center"
              >
                {genres.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Gamegenres;
