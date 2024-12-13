import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { useGameDetails } from "../hooks/useGameDetails";
import { Box, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data } = useGameDetails(slug!);
  console.log(data, "data");
  return (
    <>
      <BreadCrumb />
      <Box marginTop="20px">
        <Text>{data?.description_raw}</Text>
      </Box>
    </>
  );
};

export default GameDetailsPage;
