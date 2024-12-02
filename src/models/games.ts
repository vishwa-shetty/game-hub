export interface Games {
  id: number;
  name: string;
  background_image: string;
}

export interface FetchGamesResponse {
  results: Games[];
  count: number;
}
