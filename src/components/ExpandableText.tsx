import { Button, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string | undefined;
  website: string | undefined;
}

const ExpandableText = ({ text, website }: Props) => {
  const [expandable, setExpandable] = useState(false);

  const finalText = text?.substring(0, 300) + "...";

  return (
    <Text>
      {expandable && (
        <>
          {text}...
          {website && (
            <Link
              href={website}
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              Read More
            </Link>
          )}
        </>
      )}
      {!expandable && finalText}
      <Button
        onClick={() => setExpandable(!expandable)}
        colorScheme="yellow"
        size="xs"
        margin="0"
      >
        {expandable ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
