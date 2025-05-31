import './dashboard.css';
import { getMovies } from './services';

function Dashboard() {
  const {data,isPending, error} = getMovies();
  return (
    <div className="dashboard">
      {isPending && <p>Pending...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.results.map((movie: any) => (
            <li key={movie.id}>
              {movie.title} ({movie.release_date})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dashboard