import { useSelector } from "react-redux";
import Loading from "./Loading";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { movieResult, movieName, isLoading } = useSelector(
    (store) => store.gpt,
  );

  // Loading state
  if (isLoading) {
    return (
      <main
        className="
          relative
          z-20
          flex
          min-h-screen
          items-center
          justify-center
          px-4
          pt-24
        "
      >
        <Loading />
      </main>
    );
  }

  // No results yet
  if (!movieResult?.length) {
    return null;
  }

  return (
    <main
      className="
        relative
        z-20
        mt-10
        min-h-screen
        bg-gradient-to-b
        from-transparent
        via-black/20
        to-black
        pb-12
      "
    >
      {/* Heading */}
      <div
        className="
          mx-auto
          mb-6
          w-full
          max-w-[1600px]
          px-5
          sm:px-8
          md:mb-8
          lg:px-12
          xl:px-16
        "
      >
        <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          AI Movie Suggestions
        </h1>

        <p className="mt-2 text-sm text-gray-300 sm:text-base">
          Movies recommended for you by AI
        </p>
      </div>

      {/* Movie Lists */}
      <div className="space-y-8 sm:space-y-10">
        {movieResult.map((movies, index) => {
          if (!movies?.length) return null;

          return (
            <MovieList
              key={`${movieName?.[index] || "movie"}-${index}`}
              title={movieName?.[index] || "Recommended Movies"}
              movies={movies}
            />
          );
        })}
      </div>
    </main>
  );
};

export default GPTMovieSuggestion;