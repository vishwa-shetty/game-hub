import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  terms: string;
  children: ReactNode | ReactNode[];
}
const DefinationTerms = ({ terms, children }: Props) => {
  return (
    <Box marginY={2} marginTop={10}>
      <Heading as="dt" color="gray.500" fontSize="md">
        {terms}
      </Heading>
      {children}
    </Box>
  );
};

export default DefinationTerms;
