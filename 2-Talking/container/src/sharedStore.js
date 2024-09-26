import { create } from "zustand";

const useSharedStore = create((set) => ({
  sharedData: "Initial Shared Data",
  setSharedData: (newData) => set({ sharedData: newData }),
}));

export default useSharedStore;
