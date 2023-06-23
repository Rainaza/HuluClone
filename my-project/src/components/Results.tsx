import { Movie } from "@/types/types"
import { Thumbnails } from "./Thumbnails"

interface Props{
    results:Movie[]
}
export const Results = ({results}:Props) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 " >
        {results.map((result)=>(
            <Thumbnails key={result.id} result={result}/>
        ))}
    </div>
  )
}
