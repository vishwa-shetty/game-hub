import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import GenresSkelton from "./GenresSkelton";
import { useGenres } from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";
import gameStore from "../../store";

const Gamegenres = () => {
  const { data, isLoading, error } = useGenres();
  const selectedgenreID = gameStore((s) => s.gameQuery.genreId);
  const onSelectedGenre = gameStore((s) => s.setGenre);

  if (error) return null;
  if (isLoading) return <GenresSkelton />;
  return (
    <>
      <Button
        fontSize="4xl"
        variant="plain"
        onClick={() => onSelectedGenre(-1)}
        marginBottom="20px"
        padding="0"
      >
        Genres
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
                onClick={() => onSelectedGenre(genres?.id)}
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
