import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGridSkelton = () => {
  const gameArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
