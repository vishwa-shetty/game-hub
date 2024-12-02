import { SkeletonText, Stack } from "@chakra-ui/react";

const GameGeneresSkelton = ({ count }: { count: number }) => {
  const genereArray = Array.from(
    { length: count },
    () => Math.floor(Math.random() * 100) + 1
  );

  return (
    <>
      <Stack>
        {genereArray?.map((generes) => (
          <SkeletonText
            key={generes}
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

export default GameGeneresSkelton;
