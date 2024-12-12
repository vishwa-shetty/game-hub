import { HStack, Img, useColorMode } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import logo_dark from "../assets/game-over-dark.png";
import logo_light from "../assets/game-over-light.png";
import {
  SearchContext,
  SearchContextType,
} from "../features/search/SearchContext";
import SearchInput from "../features/search/SearchInput";
import ToggleTheme from "../features/theme/ToggleTheme";
import gameStore from "../store";

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
        <Img src={colorMode === "dark" ? logo_dark : logo_light} boxSize={10} />
        <SearchInput />
        <ToggleTheme />
        {/* <Image src={user} boxSize={10} /> */}
      </HStack>
    </>
  );
};

export default NavBar;
