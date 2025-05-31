import { useQuery } from "@tanstack/react-query";
import {axiosWithAuth} from "@utils/api/axios";
import type { GenreListResponse, MovieListResponse } from "./types";

export function getMovies({page=1}) {
  return useQuery({
    queryKey: ['movies', page],
    queryFn: () => axiosWithAuth.get<MovieListResponse>('/3/discover/movie',{params: {language: 'en', page}})
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