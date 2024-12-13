import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score = 0 }: { score: number | undefined }) => {
  const color = score > 80 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge padding={1} borderRadius="sm" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
