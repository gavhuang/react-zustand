/* eslint-disable @typescript-eslint/no-explicit-any */
import { create, StateCreator } from "zustand";
import { devtools, DevtoolsOptions, persist, PersistOptions } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface StoreOptions<T> {
  devtoolsOptions?: DevtoolsOptions;
  persistOptions: PersistOptions<T>;
}

const createCustomStore = <T extends object, U extends object>(
  state: T,
  options: StoreOptions<T>,
  actions: StateCreator<
    T,
    [
      ["zustand/devtools", never],
      ["zustand/persist", T],
      ["zustand/immer", never],
    ],
    [
      ["zustand/immer", never],
      ["zustand/persist", T],
      ["zustand/devtools", never],
    ],
    U
  >,
) => {
  return create<T & U>()(
    devtools(
      persist(
        immer((...a) => Object.assign({}, state, (actions as any)(...a))),
        options.persistOptions,
      ),
      options.devtoolsOptions
    ),
  );
};

export default createCustomStore;
