import HorizontalMovieCard from "./HorizontalMovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <section className="w-full">
      <h2
        className="
          mb-3
          px-5
          text-lg
          font-bold
          text-white
          sm:mb-4
          sm:px-8
          sm:text-xl
          md:px-12
          md:text-2xl
        "
      >
        {title}
      </h2>

      <div
        className="
          movie-scroll
          flex
          gap-4
          overflow-x-auto
          px-5
          pb-4
          sm:gap-5
          sm:px-8
          md:gap-6
          md:px-12
        "
      >
        {movies.map((movie) => (
          <HorizontalMovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;