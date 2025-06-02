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
    const currentListIds = state.movies.map(m=>m.id)
    const newMovies = movies.filter(m=>!currentListIds.includes(m.id))
    return({ movies: [...state.movies,...newMovies] });
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