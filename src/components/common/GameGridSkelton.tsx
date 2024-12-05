import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGridSkelton = ({ count }: { count: number }) => {
  const gameArray = Array.from(
    { length: count },
    () => Math.floor(Math.random() * 100) + 1
  );

  return (
    <>
      {gameArray.map((game) => (
        <Card maxW="sm" borderRadius="lg">
          <Skeleton height="200px" />
          <CardBody>
            <SkeletonText mt="1" noOfLines={2} spacing="2" skeletonHeight="6" />
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default GameGridSkelton;
