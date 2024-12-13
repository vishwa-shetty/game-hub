import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const routeError = useRouteError();
  return (
    <>
      <Heading>Oops..</Heading>
      <Text>
        {isRouteErrorResponse(routeError)
          ? "This page does not exist"
          : "Unexpected error occurred.."}
      </Text>
    </>
  );
};
