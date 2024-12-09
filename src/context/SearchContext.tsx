import { createContext, ReactNode, useState } from "react";

export interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
