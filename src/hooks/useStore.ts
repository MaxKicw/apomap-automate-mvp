import create from "zustand";
import type { Store } from "../types/Store.js";

export const useStore = create<Store>()((set) => ({
  number: 0,
  increase: (by: number) => set((state) => ({ number: state.number + by })),
  decrease: (by: number) => set((state) => ({ number: state.number - by })),
}));
