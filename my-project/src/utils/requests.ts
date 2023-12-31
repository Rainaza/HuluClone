const API_KEY = process.env.API_KEY


const requests = {
  fetchTrending:{
    title:'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchNetflixOriginals: {
    title:"Orginals",
    url:`/discover/movie?api_key=${API_KEY}&with_networks=213`
  },
  fetchTopRated: {
    title:"Top-Rated",
    url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    title:"Action Movies",
    url:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedyMovies: {
    title:"Comedy",
    url:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
  },
  fetchHorrorMovies: {
    title:"Horrors",
    url:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
  },
  fetchRomanceMovies: {
    title:"Romance",
    url:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
  },
  fetchDocumentaries: {
    title:"Documentaries",
    url:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
  },
}

export default requests