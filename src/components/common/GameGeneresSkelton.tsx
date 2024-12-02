import { SkeletonText, Stack } from "@chakra-ui/react";

const GameGeneresSkelton = () => {
  const genereArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 100) + 1
  );

  return (
    <>
      <Stack>
        {genereArray?.map((generes) => (
          <SkeletonText mt="1" noOfLines={2} spacing="2" skeletonHeight="6" />
        ))}
      </Stack>
    </>
  );
};

export default GameGeneresSkelton;
