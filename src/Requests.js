const tmdb_api_key = '5f22e3014395a69557d447a1ea6eb6aa';

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${tmdb_api_key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdb_api_key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${tmdb_api_key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${tmdb_api_key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdb_api_key}&language=en-US&page=1`,
};

export default requests;