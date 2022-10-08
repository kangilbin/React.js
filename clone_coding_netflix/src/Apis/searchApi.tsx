const API_KEY = "154d88b6b5816f24fd5dcbb5af5916f8";
const BASE_PATH = "https://api.themoviedb.org/3";

interface ISearch {
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_name: string;
  overview: string;
}

export interface IGetSearchResult {
  page: number;
  results: ISearch[];
  total_pages: number;
  total_results: number;
}

export async function getSearch(keyword?: string | null) {
  return fetch(
    `${BASE_PATH}/search/multi?api_key=${API_KEY}&language=ko&query=${keyword}`
  ).then((response) => response.json());
}
