import { create } from 'zustand'
import type { Movie } from './types';



type MovieStates = {
  page: number,
  movies:Movie[],
  addMovies: (movies:Movie[]) => void,
  nextPage: () => void,
}
export const useMovieStore = create<MovieStates>()((set) => ({
  page: 1,
  movies: [],
  nextPage: () => set(({page}) => ({ page:page+1 })),
  addMovies: (movies) => set((state) =>{
    return({ movies: [...state.movies,...movies] });
  })
}))