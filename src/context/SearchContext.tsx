import { createContext, ReactNode, useState } from "react";

export interface SearchContextType {
  searchValue: string | null;
  setSearchValue: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType | null>(null);

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
