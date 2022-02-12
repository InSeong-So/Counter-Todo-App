import { atom } from 'recoil';

export const counterState = atom({
  key: 'counter_state',
  default: 0,
});
