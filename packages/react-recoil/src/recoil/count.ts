import { atom, selector } from 'recoil';

export const counterState = atom<number>({
  key: 'counterState',
  default: 0,
});

export const asyncCounterSelector = selector<number>({
  key: 'asyncCounterSelector',
  get: async ({ get }) => {
    const counter = get(counterState);

    await new Promise(resolve => setTimeout(() => resolve(1), 1000));

    return counter;
  },
  set: ({ set }, newValue) => {
    // Error!! -> recoil.js:16 Uncaught Error: Recoil: Async selector sets are not currently supported.
    // ;(async () =>
    //   await new Promise((resolve) =>
    //     setTimeout(() => resolve(set(counterAtom, newValue)), 1000)
    //   ))()
    set(counterState, newValue);
  },
});
