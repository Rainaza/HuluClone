import Head from "next/head";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Results } from "@/components/Results";
import { GetServerSideProps } from "next";
import requests from "@/utils/requests";
import { Movie } from "@/types/types";
interface Props{
  results:Movie[]
}
export default function Home({results}:Props) {
  if (typeof window !== "undefined") {
  console.log(window.pageYOffset === window.scrollY)
  }
  return (
    <>
      <Head>
        <title>Hulu</title>
      
      </Head>
      <main className="w-screen h-screen">
        <Header/>
        <Navbar/>
        <Results results={results}/>
      </main>
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre===undefined?'fetchTrending':genre]?.url||requests.fetchTrending.url}`).then(res=>res.json())


  return {
    props: {
    results:request.results
    }
  }
}