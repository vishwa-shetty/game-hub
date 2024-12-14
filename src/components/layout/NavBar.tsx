import { HStack, Img, useColorMode } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo_dark from "../../assets/game-over-dark.png";
import logo_light from "../../assets/game-over-light.png";
import { SearchContext, SearchContextType } from "../search/SearchContext";
import SearchInput from "../search/SearchInput";
import ToggleTheme from "../theme/ToggleTheme";
import gameStore from "../../store";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const { searchValue } = useContext(SearchContext) as SearchContextType;

  const setSearchValue = gameStore((s) => s.setSearchText);

  useEffect(() => {
    setSearchValue(searchValue);
  }, [searchValue]);

  return (
    <>
      <HStack spacing={5} marginBottom="20px">
        <Link to="/game-over">
          <Img
            src={colorMode === "dark" ? logo_dark : logo_light}
            boxSize={10}
            objectFit="contain"
          />
        </Link>
        <SearchInput />
        <ToggleTheme />
        {/* <Image src={user} boxSize={10} /> */}
      </HStack>
    </>
  );
};

export default NavBar;
