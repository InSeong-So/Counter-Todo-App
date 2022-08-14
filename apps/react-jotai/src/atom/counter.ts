import { atom } from 'jotai';
import { sleep } from '../utils';

const countAtom = atom(0);

export const readonlyCountAtom = atom(async get => {
  await sleep(1000);
  return get(countAtom);
});

export const writeCountAtom = atom<null, number, Promise<void>>(null, async (get, set, payload) => {
  set(countAtom, get(countAtom) + payload);
});
