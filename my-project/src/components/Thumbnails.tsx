import { Movie } from "@/types/types"
import Image from "next/image"
import { HandThumbUpIcon } from "@heroicons/react/24/outline"
interface Props{
    result:Movie
}

export const Thumbnails = ({result}:Props) => {

  return (
    <div className="group cursor-pointer p-3 transition-200 ease-in transform sm:gover:scale-105 hover:z-50">
        <Image src={`https://image.tmdb.org/t/p/w500${
          result.backdrop_path || result.poster_path
        }`} height={1080} width={1920} alt="movieImage"
       />
       <div className="p-2">
        <p className="truncate max-w-md">
            {result.overview}
        </p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title||result.original_name}</h2>
        <p className="flex items-center  opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out">{result.media_type&& result.media_type}{" "}{result.release_date||result.first_air_date}{" "} <HandThumbUpIcon className="h-5 mx-2"/> {result.vote_count}</p>
       </div>
    </div>
  )
}
