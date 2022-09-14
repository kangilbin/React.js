import { atom, selector } from "recoil";

export const minutesState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  // number만 리턴 한다.

  key: "hours",
  get: ({ get }) => {
    // 리턴 되는 값이 hnourSelector의 값이 된다.
    const minutes = get(minutesState); // atom값 가져옴
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minutesState, minutes); // atom 값 수정
  },
});
