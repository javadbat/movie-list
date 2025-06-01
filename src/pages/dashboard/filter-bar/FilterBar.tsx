import { Input } from "@components/ui/input"
import { useMovieStore } from "../store"
export function FilterBar() {
  const filters = useMovieStore((state) => state.filters);
  const setTitleFilter = useMovieStore((state) => state.setTitleFilter);
  return (
    <div className='filter-bar flex absolute top-0 left-0 bg-gray-600 text-white w-full p-4 z-10'>
      <Input placeholder="search" value={filters.title} onChange={(e)=>{setTitleFilter(e.target.value)}} />
    </div>
  )
}