import { SkeletonText, Stack } from "@chakra-ui/react";

const GamegenresSkelton = () => {
  const genreArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Stack>
        {genreArray?.map((genres) => (
          <SkeletonText
            key={genres}
            mt="1"
            noOfLines={2}
            spacing="2"
            skeletonHeight="6"
          />
        ))}
      </Stack>
    </>
  );
};

export default GamegenresSkelton;
