import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { MdLocationSearching } from "react-icons/md";
import { useContext } from "react";
import { SearchContext, SearchContextType } from "./SearchContext";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const { setSearchValue } = useContext(SearchContext) as SearchContextType;
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/game-over/");
    setSearchValue(searchInput.current?.value ?? "");
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup>
        <InputLeftElement pointerEvents="stroke">
          <MdLocationSearching />
        </InputLeftElement>
        <Input ref={searchInput} type="text" placeholder="Search Games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
