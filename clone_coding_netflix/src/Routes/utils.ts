export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}

export enum Categories {
  "Movie Now Playing",
  "Movie Top Rated",
  "Movie Upcoming",
  "TV Airing Today",
  "TV Popular",
  "TV Top Rated",
}
