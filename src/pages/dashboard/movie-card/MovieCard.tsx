import { Card } from "@components/ui/card";
import type { Movie } from "../types";
import { Rating } from "@components/ui/rating";
import { getGenres } from "../services";
import { useMemo } from "react";
import { Link } from "react-router";
type Props = {
  movie: Movie
}
export function MovieCard(props: Props) {
  const { movie } = props;
  const genres = getGenres();
  const genreStrings = useMemo(() => {
    return movie.genre_ids.map((genreId) => {
      const genre = genres.data?.genres.find(g => g.id === genreId);
      return genre ? genre.name : 'Unknown Genre';
    });
  }, [genres.data?.genres, movie.genre_ids]);
  return (
    <Link to={`/detail/${movie.id}`} className="no-underline text-inherit">
    <Card key={movie.id} className='py-0'>
      {
        movie.poster_path &&
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='w-full h-auto aspect-square object-cover rounded-xl' />
      }
      <div className="px-4 py-8 flex flex-col gap-2">
        <div className="text-2xl font-bold">{movie.title} ({movie.release_date})</div>
        <div >{genreStrings.join(",")}</div>
        <div className="flex gap-2">
          <span>{Number(movie.vote_average).toFixed(1)}/10</span>
          <Rating maxRating={10} rating={movie.vote_average} />
        </div>
      </div>

    </Card>
    </Link>
    
  )
}
