import { useQuery } from "@tanstack/react-query";
import {axiosWithAuth} from "@utils/api/axios";
import type { GenreListResponse, MovieListResponse } from "./types";

type getMoviesParams = {page:number, query?: string};
export function getMovies({page, query}:getMoviesParams) {
  const endpoint = (query !== undefined && query !=='') ? '/3/search/movie' : '/3/discover/movie';
  return useQuery({
    queryKey: ['movies', page, query],
    queryFn: () => axiosWithAuth.get<MovieListResponse>(endpoint,{params: {language: 'en', page, query}})
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching movies:', error);
        throw error;
      }),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false,
  })
}
export function getGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => axiosWithAuth<GenreListResponse>('/3/genre/movie/list?language=en')
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching movies:', error);
        throw error;
      }),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false,
  })
}