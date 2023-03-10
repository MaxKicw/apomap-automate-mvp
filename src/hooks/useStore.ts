import create from "zustand";
import type { Store } from "../types/Store.js";

export const useStore = create<Store>()((set) => ({
  //Test
  number: 0,
  increase: (by) => set((state) => ({ number: state.number + by })),
  decrease: (by) => set((state) => ({ number: state.number - by })),
  //Dialog-Management
  shownDialog: { shown: false },
  closeDialog: () => set(() => ({ shownDialog: { shown: false } })),
  showDialog: ({ type }) => set(() => ({ shownDialog: { shown: true, type } })),
  //Auth
  user: null,
  setUser: (user) => set(() => ({ user })),
}));
