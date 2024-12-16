import { Img, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo_dark from "../../assets/game-over-dark.png";
import logo_light from "../../assets/game-over-light.png";

const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <Link to="/game-over">
      <Img
        src={colorMode === "dark" ? logo_dark : logo_light}
        boxSize={10}
        objectFit="contain"
      />
    </Link>
  );
};

export default Logo;
