import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score = 0 }: { score: number | undefined }) => {
  const color = score > 4 ? "green" : score > 3 ? "yellow" : "red";
  return (
    <Badge padding={1} borderRadius="sm" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
