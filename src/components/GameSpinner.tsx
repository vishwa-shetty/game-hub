import { VStack, Spinner, Text } from "@chakra-ui/react";

const GameSpinner = () => {
  return (
    <VStack mt={10}>
      <Spinner color="colorPalette.600" />
      <Text color="colorPalette.600">Loading...</Text>
    </VStack>
  );
};

export default GameSpinner;
