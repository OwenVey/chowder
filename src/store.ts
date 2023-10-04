import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface Store {
  isGlobalSearchOpen: boolean;

  setIsGlobalSearchOpen: (open: boolean) => void;
}

export const useStore = create<Store>()(
  immer(
    devtools((set) => ({
      isGlobalSearchOpen: false,
      setIsGlobalSearchOpen: (isGlobalSearchOpen) => set(() => ({ isGlobalSearchOpen })),
    })),
  ),
);
