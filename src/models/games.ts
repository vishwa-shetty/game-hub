export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Generes {
  id: number;
  name: string;
  image_background: string;
}

export interface Games extends Generes {
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface UseFetchData<T> {
  results: T[];
  count: number;
}

export interface Sort {
  value: string;
}

export interface GameQuery {
  genere: Generes | null;
  sort: Sort | null;
  platform: Platform | null;
}
