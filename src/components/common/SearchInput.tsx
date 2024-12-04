import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { MdLocationSearching } from "react-icons/md";
import { useContext } from "react";
import { SearchContext, SearchContextType } from "../../context/SearchContext";

const SearchInput = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const { setSearchValue } = useContext(SearchContext) as SearchContextType;
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(searchInput.current?.value ?? "");
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup>
        <InputLeftElement pointerEvents="stroke">
          <MdLocationSearching />
        </InputLeftElement>
        <Input ref={searchInput} type="tel" placeholder="Search Games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
