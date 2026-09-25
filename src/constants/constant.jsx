export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_KEY
  }
};

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY

export const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?page=1';

export const NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const TOP_RATED_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?&page=1';

export const UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming?&page=1';

export const TRENDING_MOVIES_URL = 'https://api.themoviedb.org/3/trending/movie/day'

export const IMAGE_URL = "https://image.tmdb.org/t/p/w300";

export const VIDEO_URL = "https://api.themoviedb.org/3/movie/";

export const PROFILE_IMAGE_URL = "https://occ-0-4344-3646.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWdoQDrgD7cokEYrF-FVdgfoil5wiBMg6j3GeUjYY_av6C64opFSXOsJ5U8EF02G6SB6b4zUw4MSG6EtpQu8gUBg1Y5Bgs4.png?r=229";

export const NETFLIX_LOGO_URL = "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVvRDRqBcLS7fk0Qpns6gQSS3VdMMYtpN_ba4Nzu63yuVrE7JHt-MdKCNAQnJ8SrsPBqivurwF6ugwnAa54jBGNohFD6CNLHDjwQUnPO_cKrHSqgmLOAw0zUe2dRClJd4cchXguY1Bjj.svg";

export const NETFLIX_BANNER_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/42f3cd9f-c9a8-4cae-8c03-3e7aa13e0154/web/IN-en-20260727-TRIFECTA-perspective_83c6fd6c-bc2e-4518-80be-359a85c542a2_large.jpg";

export const GENRES_API = "https://api.themoviedb.org/3/genre/movie/list?language=en";