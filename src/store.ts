import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  sortOrder?: string;
  platformId?: number;
  search?: string;
}

interface GameStore {
  gameQuery: GameQuery;
  setGenre: (genre: number) => void;
  setPlatform: (platform: number) => void;
  setSortOrder: (sort: string) => void;
  setSearchText: (searchValue: string) => void;
}

const gameStore = create<GameStore>((set) => ({
  gameQuery: {},
  setGenre: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
  setPlatform: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setSearchText: (search) => set(() => ({ gameQuery: { search } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Game Store", gameStore);

export default gameStore;
