import { HStack } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import gameStore from "../../store";
import Logo from "../common/Logo";
import { SearchContext, SearchContextType } from "../search/SearchContext";
import SearchInput from "../search/SearchInput";
import ToggleTheme from "../theme/ToggleTheme";

const NavBar = () => {
  const { searchValue } = useContext(SearchContext) as SearchContextType;

  const setSearchText = gameStore((s) => s.setSearchText);

  useEffect(() => {
    setSearchText(searchValue);
  }, [searchValue]);

  return (
    <>
      <HStack spacing={5} marginBottom="20px">
        <Logo />
        <SearchInput />
        <ToggleTheme />
        {/* <Image src={user} boxSize={10} /> */}
      </HStack>
    </>
  );
};

export default NavBar;
