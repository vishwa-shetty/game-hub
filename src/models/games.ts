export interface Games extends Genres {
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  rating: number;
}

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
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

export interface Publisher {
  id: number;
  name: string;
}

export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  rating: number;
  background_image: string;
  description_raw: string;
  description: string;
  website: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genres[];
  publishers: Publisher[];
  released: string;
}

export interface Screenshots {
  id: number;
  image: string;
}

export interface Trailer {
  id: number;
  preview: string;
  data: { 480: string; max: string };
}
