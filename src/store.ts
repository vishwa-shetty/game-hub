import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GameQuery {
  genreId?: number;
  sortOrder?: string;
  platformId?: number;
  search?: string;
}

interface GameStore {
  gameQuery: GameQuery;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchValue: string) => void;
  resetGameQuery: () => void;
}

const useGameStore = create<GameStore>()(
  devtools(
    (set) => {
      // Helper function to update gameQuery state
      const updateGameQuery = (updates: Partial<GameQuery>) =>
        set((state) => ({ gameQuery: { ...state.gameQuery, ...updates } }));

      return {
        gameQuery: {},
        setGenre: (genreId) => updateGameQuery({ genreId }),
        setPlatform: (platformId) => {
          if (platformId === -1) {
            // Remove platformId from gameQuery
            set((state) => {
              const { platformId, ...rest } = state.gameQuery;
              return { gameQuery: rest };
            });
          } else {
            updateGameQuery({ platformId });
          }
        },
        setSortOrder: (sortOrder) => updateGameQuery({ sortOrder }),
        setSearchText: (search) => updateGameQuery({ search }),
        resetGameQuery: () => set(() => ({ gameQuery: {} })),
      };
    },
    { name: "GameStore" } // Name for Redux DevTools
  )
);

// Enable simple-zustand-devtools for development inspection
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Game Store", useGameStore);
}

export default useGameStore;
