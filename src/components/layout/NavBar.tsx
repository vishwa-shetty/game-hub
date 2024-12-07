import { HStack, Image, Img, useColorMode } from "@chakra-ui/react";
import logo_light from "../../assets/game-over-light.png";
import logo_dark from "../../assets/game-over-dark.png";
import user from "../../assets/user.png";
import ToggleTheme from "../common/ToggleTheme";
import SearchInput from "../common/SearchInput";
import { SearchContext, SearchContextType } from "../../context/SearchContext";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { GameQuery } from "../../models/games";

interface Props {
  gameQuery: GameQuery;
  setGameQuery: Dispatch<SetStateAction<GameQuery>>;
}

const NavBar = ({ setGameQuery, gameQuery }: Props) => {
  const { colorMode } = useColorMode();
  const { searchValue } = useContext(SearchContext) as SearchContextType;

  useEffect(() => {
    if (searchValue?.length !== 0)
      setGameQuery({ ...gameQuery, search: searchValue });
  }, [searchValue]);

  return (
    <>
      <HStack spacing={5}>
        <Img src={colorMode === "dark" ? logo_dark : logo_light} boxSize={10} />
        <SearchInput />
        <ToggleTheme />
        <Image src={user} boxSize={10} />
      </HStack>
    </>
  );
};

export default NavBar;
