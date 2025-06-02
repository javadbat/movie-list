import { getMovies } from './services';
import { MovieCard } from './movie-card/MovieCard';
import {JBInfiniteScroll} from "jb-infinite-scroll/react";
import { useEffect } from 'react';
import { useMovieStore } from './store';
import { SkeletonCard } from './movie-card/SkeletonCard';
import { FilterBar } from './filter-bar/FilterBar';
import {useDebounce, } from '@uidotdev/usehooks';
import { useSearchParams } from 'react-router';

function Dashboard() {

  const [searchParams, setSearchParams] = useSearchParams();

  const movies = useMovieStore((state) => state.movies);
  const addMovies = useMovieStore((state) => state.addMovies);
  const clearMovie = useMovieStore((state) => state.clearMovies);
  const addPage = useMovieStore((state) => state.nextPage);
  const page = useMovieStore((state) => state.page);
  const searchTerm = useMovieStore((state) => state.filters.title);
  const query = useDebounce(searchTerm, 500);
  const { data, isPending, error } = getMovies({page, query });
  const isListEnded = (data?.total_pages||1) <= (data?.page|| 1);

  useEffect(()=>{
    data && addMovies(data.results);
  },[data]);

  useEffect(()=>{
    const q = searchParams.get("q");
    if(q != query){
      clearMovie();
      query?searchParams.set("q",query):searchParams.delete("q");
      setSearchParams(searchParams)
    }
  },[query])
  
  return (
    <div className="dashboard py-4 h-full relative">
      <FilterBar/>
      <JBInfiniteScroll isLoading={isPending} disableCaptureScroll={isPending} isListEmpty={!isPending && movies.length==0} isListEnded={isListEnded} onScrollEnd={()=>{addPage()}} className='w-full h-full'>
        <div slot='content' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-8 gap-8 min-md:gap-16 min-md:p-16 '>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        {error && <p>Error: {error.message}</p>}
        </div>
        <div slot="empty" className='text-center text-gray-500'>No movies found.</div>
        <div slot="loading" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-8 gap-8 min-md:gap-16 min-md:p-16'>
            <SkeletonCard/>
            <SkeletonCard className='hidden sm:block'/>
            <SkeletonCard className='hidden lg:block'/>
            <SkeletonCard className='hidden 2xl:block'/>
        </div>
      </JBInfiniteScroll>

    </div>
  )
}

export default Dashboard