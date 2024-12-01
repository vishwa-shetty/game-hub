import { HStack, Image, Img, Input, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

const NavBar = () => {
  return (
    <>
      <HStack spacing={5}>
        <Img src={logo} boxSize="50px" />
        <Text>Vishwa Game Hub</Text>
        <Input />
        <Image src={user} width="30px" onClick={() => console.log("clicked")} />
      </HStack>
    </>
  );
};

export default NavBar;
