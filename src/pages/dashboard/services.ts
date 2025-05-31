import { useQuery } from "@tanstack/react-query";
import {axiosWithAuth} from "@utils/api/axios";

export function getMovies() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: () => axiosWithAuth('/3/discover/movie')
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching movies:', error);
        throw error;
      }),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false,
  })
}