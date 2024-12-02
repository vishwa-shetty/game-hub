import { HStack, List, ListItem, Text, Image, Heading } from "@chakra-ui/react";
import { useGenres } from "./hooks/useData";

const GameGeneres = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <>
      <Heading marginBottom="20px">Generes</Heading>
      <List>
        {data?.map((generes) => (
          <ListItem key={generes.id} marginBottom="5px">
            <HStack>
              <Image
                boxSize="40px"
                height="40px"
                borderRadius="lg"
                src={generes.image_background}
              />
              <Text>{generes.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGeneres;
