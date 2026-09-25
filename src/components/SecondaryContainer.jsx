import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <section className="bg-black text-white">
      <div className="relative z-10 -mt-10 sm:-mt-14 md:-mt-20">
        <MovieList
          title="Now Playing"
          movies={movies.nowPlayingMovies}
        />

        <MovieList
          title="Top Rated on Netflix"
          movies={movies.topRatedMovies}
        />

        <MovieList
          title="Trending on Netflix"
          movies={movies.trendingMovies}
        />

        <MovieList
          title="Popular on Netflix"
          movies={movies.popularMovies}
        />

        <MovieList
          title="Upcoming on Netflix"
          movies={movies.upcomingMovies}
        />
      </div>
    </section>
  );
};

export default SecondaryContainer;