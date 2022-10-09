import { createContext, useContext, useState } from "react";

export interface ISearchContext {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<ISearchContext | null>(null);

export default function searchContext({ children }: any) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{search, setSearch}}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  return useContext(SearchContext);
}
