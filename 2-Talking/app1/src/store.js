import { create } from "zustand";

const useLocalStore = create((set) => ({
  sharedData: "Local Data", // Local state for independence
  setSharedData: (newData) => set({ sharedData: newData }),
}));

let useSharedStore;
try {
  useSharedStore = require("container/sharedStore").default; // Attempt to use shared store
} catch (e) {
  console.warn("Container shared store not available, using local store");
  useSharedStore = useLocalStore; // Fallback to local store
}

export default useSharedStore;
