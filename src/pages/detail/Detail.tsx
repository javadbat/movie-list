import { useParams } from "react-router"
import { getMovie } from "./service";
import { Fragment } from "react/jsx-runtime";
import { appConfig } from "@config/app-config";
import { Skeleton } from "@components/ui/skeleton";
import './detail.css';

export default function Detail() {

  const {movieId} = useParams();
  let {data,isPending,isError} = getMovie({movieId: movieId || ''});

  return (
    <div className="detail-page">
      {
        isPending &&
        <Fragment>
          <Skeleton className="[grid-area:poster] aspect-[2/3] rounded-2xl" />
          <Skeleton className="[grid-area:title] h-20" />
          <Skeleton className="[grid-area:description] h-6" />
          <Skeleton className="[grid-area:rate] h-6" />
          <Skeleton className="[grid-area:runtime] h-6" />
          <Skeleton className="[grid-area:date] h-6" />
          <Skeleton className="[grid-area:genres] h-6" />
          <Skeleton className="[grid-area:company] h-6" />
        </Fragment>
      }
      {
        data &&
        <Fragment>
          {
            data.poster_path &&
            (<img src={appConfig.address.TMBDImageBaseUrl+"/w500"+data.poster_path} className="[grid-area:poster] aspect-[2/3] rounded-2xl"/>)
          }
          <div className="text-6xl font-bold area [grid-area:title]">{data.title}</div>
          <div className="text-gray-700 [grid-area:description]">{data.overview}</div>
          <div className="text-gray-500 [grid-area:rate]">Rating: {data.vote_average}/10</div>
          <div className="text-gray-500 [grid-area:runtime]">Runtime: {data.runtime} minutes</div>
          <div className="text-gray-500 [grid-area:date]">Release Date: {data.release_date}</div>
          <div className="text-gray-500 [grid-area:genres]">Genres: {data.genres.map(genre => genre.name).join(", ")}</div>
          <div className="text-gray-500 [grid-area:company]">Production Companies: {data.production_companies.map(company => company.name).join(", ")}</div>
        </Fragment>
      }
      {
        isError &&
        <div className="text-red-500 text-center">Error loading movie details.</div>
      }
    </div>
  )
}