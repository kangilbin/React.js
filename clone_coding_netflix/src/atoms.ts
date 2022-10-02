import { atom } from "recoil";
import { IGetMoviesResult } from "./Apis/movieApi";
import { IGetTvResult } from "./Apis/tvApi";

export const isMovieAtom = atom<IGetMoviesResult | undefined>({
  key: "isMovie",
  default: {
    dates: {
      maximum: "",
      minimum: "",
    },
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
});

export const isTvAtom = atom<IGetTvResult | undefined>({
  key: "isTv",
  default: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
});
