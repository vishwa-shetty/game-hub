import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import { Genres } from "../../models/games";
import GenresSkelton from "./GenresSkelton";
import { useGenres } from "./useGenre";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  onSelectedgenre: (genres: Genres | null) => void;
  selectedgenreID?: number;
}

const Gamegenres = ({ onSelectedgenre, selectedgenreID }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <GenresSkelton />;
  return (
    <>
      <Button
        fontSize="4xl"
        variant="plain"
        onClick={() => onSelectedgenre(null)}
        marginBottom="20px"
        padding="0"
      >
        genres
      </Button>
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
                  selectedgenreID === genres.id
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
