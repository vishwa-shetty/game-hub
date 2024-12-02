import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGridSkelton = () => {
  return (
    <Card maxW="sm" borderRadius="lg">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText mt="1" noOfLines={2} spacing="2" skeletonHeight="6" />
      </CardBody>
    </Card>
  );
};

export default GameGridSkelton;
