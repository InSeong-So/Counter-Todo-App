import { atom, selector } from 'recoil';

export const counterState = atom({
  key: 'counterState',
  default: 0,
});

export const charCounterState = selector({
  key: 'charCounterState',
  get: ({ get }) => {
    const { length } = `${get(counterState)}`;
    return length;
  },
  set: ({ get, set }, payload) => {
    if (typeof payload !== 'number') return;

    const newCount = payload === 0 ? 0 : get(counterState) + payload;
    set(counterState, newCount);
  },
});
