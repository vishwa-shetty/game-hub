import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string | undefined;
}

const ExpandableText = ({ text }: Props) => {
  const [expandable, setExpandable] = useState(true);

  const finalText = text?.substring(0, 300);

  return (
    <Text>
      {expandable ? text + "..." : finalText + "..."}
      <Button
        onClick={() => setExpandable(!expandable)}
        variant="unstyled"
        size="xs"
        margin="0"
      >
        {expandable ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
