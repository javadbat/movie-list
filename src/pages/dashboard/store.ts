import { create } from 'zustand'
import type { Movie, GenreId } from './types';



type MovieStates = {
  page: number,
  //TODO: it's better to be in a separate store but i put it here for simplicity
  filters:{
    title?: string,
    genre?: GenreId,
  },
  movies:Movie[],
  addMovies: (movies:Movie[]) => void,
  clearMovies: () => void,
  nextPage: () => void,
  setTitleFilter: (title?: string) => void,
  setGenreFilter: (genre?: GenreId) => void,
}
export const useMovieStore = create<MovieStates>()((set) => ({
  page: 1,
  filters: {
    title: undefined,
    //TODO: unfortunately my mock API does not support genres search along with title search, so I will leave it undefined 
    genre: undefined,
  },
  movies: [],
  nextPage: () => set(({page}) => ({ page:page+1 })),
  addMovies: (movies) => set((state) =>{
    return({ movies: [...state.movies,...movies] });
  }),
  clearMovies: () => set(() => ({ movies: [] })),
  setTitleFilter: (title?: string) => set((state) => ({
    filters: { ...state.filters, title }
  })),
  //TODO: unfortunately my mock API does not support genres search along with title search, so I will leave it undefined 
  setGenreFilter: (genre?: GenreId) => set((state) => ({
    filters: { ...state.filters, genre }
  })),
}));