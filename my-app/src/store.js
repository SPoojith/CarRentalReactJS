import create from "zustand";


export const GlobalState = create((set) => ({
  count: 0,

  increaseCount: () =>

    set((state) => {
      return {
        ...state,
        count: state.count + 1
      };
    }),
}));
