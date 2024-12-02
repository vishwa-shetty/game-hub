import {
  HStack,
  Image,
  Img,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import logo_light from "../../assets/game-over-light.png";
import logo_dark from "../../assets/game-over-dark.png";
import user from "../../assets/user.png";
import ToggleTheme from "../common/ToggleTheme";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <HStack spacing={5}>
        <Img src={colorMode === "dark" ? logo_dark : logo_light} boxSize={10} />
        <Input placeholder="Search Games..." />
        <ToggleTheme />
        <Image src={user} boxSize={10} />
      </HStack>
    </>
  );
};

export default NavBar;
