import {
  HStack,
  List,
  ListItem,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import GameGeneresSkelton from "./common/GameGeneresSkelton";
import { Generes } from "../models/games";
import getCroppedImageUrl from "./services/image-url";
import { useGenres } from "./hooks/useSelectors";

interface Props {
  onSelectedGenere: (generes: Generes | null) => void;
  selectedGeneres: Generes | null;
}

const GameGeneres = ({ onSelectedGenere, selectedGeneres }: Props) => {
  const { data, isLoading, error } = useGenres();
  return (
    <>
      <Heading marginBottom="20px">Generes</Heading>
      <List>
        {error && <p>{error}</p>}
        {isLoading && <GameGeneresSkelton count={data?.length ?? 10} />}
        <Button
          marginBottom="10px"
          variant="link"
          onClick={() => onSelectedGenere(null)}
          fontSize="4xl"
        >
          All
        </Button>
        {data?.map((generes) => (
          <ListItem key={generes.id} marginBottom="5px">
            <HStack>
              <Image
                boxSize="40px"
                height="40px"
                borderRadius="lg"
                src={getCroppedImageUrl(generes.image_background)}
              />
              <Button
                style={
                  selectedGeneres?.id === generes.id
                    ? { fontWeight: "bold", textDecoration: "underline" }
                    : { fontWeight: "normal", textDecoration: "none" }
                }
                variant="link"
                onClick={() => onSelectedGenere(generes)}
              >
                {generes.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGeneres;
