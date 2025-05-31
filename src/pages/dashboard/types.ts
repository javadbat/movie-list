type LanguageCode = 'en' | 'hi' | 'de' | 'pt' | string; // Add more common codes as needed
type GenreId = 
  | 28    // Action
  | 12    // Adventure
  | 16    // Animation
  | 35    // Comedy
  | 80    // Crime
  | 18    // Drama
  | 10751 // Family
  | 14    // Fantasy
  | 27    // Horror
  | 9648  // Mystery
  | 10752 // War
  | 53    // Thriller
  | 878   // Sci-Fi
  | number; // Fallback for any other genre IDs

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: GenreId[];
  id: number;
  original_language: LanguageCode;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // Consider using Date if you'll parse it
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type MovieListResponse = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}
export type Genre = {
  id: GenreId;
  name: string;
}
export type GenreListResponse = {
  genres: Genre[];
};