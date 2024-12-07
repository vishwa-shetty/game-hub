export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

export interface Games extends Genres {
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface FetchResponse<T> {
  results: T[];
  count: number;
  next: null;
  previous: null;
}

export interface Sort {
  value: string;
  label: string;
}

export interface GameQuery {
  genre: Genres | null;
  sort: Sort | null;
  platform: Platform | null;
  search: string | null;
}
