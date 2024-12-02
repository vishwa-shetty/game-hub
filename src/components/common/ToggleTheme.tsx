import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import { Image, Tooltip, useColorMode } from "@chakra-ui/react";

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip label="Toggle Theme" placement="bottom" hasArrow>
      <Image
        src={colorMode === "dark" ? moon : sun}
        boxSize={30}
        cursor="pointer"
        alt="Toggle Theme"
        onClick={() => toggleColorMode()}
      />
    </Tooltip>
  );
};

export default ToggleTheme;
