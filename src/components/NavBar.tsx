import { HStack, Image, Img, Input, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <HStack spacing={5}>
        <Img src={logo} boxSize="50px" />
        <Text>Vishwa Game Hub</Text>
        <Input />
        <Text>{theme}</Text>
        <Image src={user} width="30px" onClick={() => toggleTheme()} />
      </HStack>
    </>
  );
};

export default NavBar;
