import { useQuery } from "@tanstack/react-query";
import {axiosWithAuth} from "@utils/api/axios";
import type { MovieDetails } from "./types";

type getMoviesParams = {movieId:string,};
export function getMovie({movieId}:getMoviesParams) {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => axiosWithAuth.get<MovieDetails>("https://api.themoviedb.org/3/movie/" + movieId)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching movies:', error);
        throw error;
      }),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false,
  })
}