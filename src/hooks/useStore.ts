import create from "zustand";
import type { Store } from "../types/Store.js";

export const useStore = create<Store>()((set) => ({
  //Test
  number: 0,
  increase: (by: number) => set((state) => ({ number: state.number + by })),
  decrease: (by: number) => set((state) => ({ number: state.number - by })),
  //Dialog-Management
  shownDialog: { shown: false },
  closeDialog: () => set(() => ({ shownDialog: { shown: false } })),
  showDialog: ({ type }: { type: string }) =>
    set(() => ({ shownDialog: { shown: true, type } })),
}));
