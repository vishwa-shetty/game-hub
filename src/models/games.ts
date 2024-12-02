export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Generes {
  id: number;
  name: string;
  background_image: string;
}

export interface Games extends Generes {
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface UseFetchData<T> {
  results: T[];
  count: number;
}
