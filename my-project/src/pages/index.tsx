import Head from "next/head";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu</title>
      
      </Head>
      <main className="w-screen">
        <Header/>
        <Navbar/>
      </main>
    </>
  );
}
