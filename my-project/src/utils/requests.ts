const API_KEY = process.env.API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  fetchTrending:{
    title:'Trending',
    url: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchNetflixOriginals: {
    title:"Orginals",
    url:`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`
  },
  fetchTopRated: {
    title:"Top-Rated",
    url:`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    title:"Action Movies",
    url:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedyMovies: {
    title:"Comedy",
    url:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
  },
  fetchHorrorMovies: {
    title:"Horrors",
    url:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
  },
  fetchRomanceMovies: {
    title:"Romance",
    url:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
  },
  fetchDocumentaries: {
    title:"Documentaries",
    url:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
  },
}

export default requests