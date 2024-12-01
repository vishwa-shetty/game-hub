import { HStack, Img, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Img src={logo} boxSize="50px" />
        <Text>Vishwa Game Hub</Text>
      </HStack>
    </>
  );
};

export default NavBar;
