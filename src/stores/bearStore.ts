import createCustomStore from "./customStore";

interface BearStoreState {
  bearNumber: number;
}

interface BearStoreActions {
  actions : {
    setBearNumber: (newBaseSerialNumber: number) => void;
    resetBearNumber?: () => void;
  }
}

const bearState: BearStoreState= {
  bearNumber: 0,
}

export const useBearStore = createCustomStore<
  BearStoreState,
  BearStoreActions
>(
  bearState,
  {
    devtoolsOptions: {
      name: "bear-store",
      store: "Bear",
    },
    persistOptions: {
      name: "bearStore",
      partialize: (state) => ({ bearNumber: state.bearNumber }),
    },
  },
  (set) => ({
    actions: {
      setBearNumber: (bearNumber) =>
        set((state) => {
          state.bearNumber = bearNumber;
        }),
      resetBearNumber: () =>
        set((state) => {
          state.bearNumber = 0
        }),
    },
  }),
);

export const useBearNumber = () => useBearStore(state => state.bearNumber);
export const useBearActions = () => useBearStore(state => state.actions);
