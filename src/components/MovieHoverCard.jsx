import { IMAGE_URL } from "../constants/constant";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useGenres from "../hooks/useGenres";

const MovieHoverCard = ({ movie }) => {
  const {
    trailerKey,
    showTrailer,
    muted,
    toggleMute,
  } = useMovieTrailer(movie.id);

  const { getGenreNames } = useGenres();

  const genreNames = getGenreNames(movie.genre_ids);

  const imagePath =
    movie.backdrop_path || movie.poster_path;

  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-md
        bg-zinc-900
        shadow-2xl
        ring-1
        ring-white/10
      "
    >
      {/* Trailer / Image */}
      <div className="relative aspect-video w-full bg-black">
        {showTrailer && trailerKey ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${
              muted ? 1 : 0
            }&controls=0&modestbranding=1`}
            title={`${movie.title} Trailer`}
            allow="autoplay"
            allowFullScreen
          />
        ) : (
          <img
            src={IMAGE_URL + imagePath}
            alt={movie.title}
            className="h-full w-full object-cover"
          />
        )}

        {/* Movie Title */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            bg-gradient-to-t
            from-black/90
            to-transparent
            p-3
            sm:p-4
          "
        >
          <h2 className="text-base font-bold text-white drop-shadow sm:text-xl">
            {movie.title}
          </h2>
        </div>

        {/* Mute */}
        {showTrailer && (
          <button
            type="button"
            aria-label={muted ? "Unmute" : "Mute"}
            onClick={toggleMute}
            className="
              absolute
              bottom-2
              right-2
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-gray-400
              bg-black/50
              text-sm
              text-white
              transition
              hover:border-white
              sm:bottom-3
              sm:right-3
            "
          >
            {muted ? "🔇" : "🔊"}
          </button>
        )}
      </div>

      {/* Details */}
      <div className="p-3 text-white sm:p-4">
        {/* Action buttons */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Play"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white
                text-sm
                text-black
                transition
                hover:bg-gray-200
                sm:h-9
                sm:w-9
              "
            >
              ▶
            </button>

            <button
              type="button"
              aria-label="Add to My List"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-gray-500
                text-lg
                transition
                hover:border-white
                sm:h-9
                sm:w-9
              "
            >
              +
            </button>

            <button
              type="button"
              aria-label="Like"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-gray-500
                text-sm
                transition
                hover:border-white
                sm:h-9
                sm:w-9
              "
            >
              👍
            </button>
          </div>
        </div>

        {/* Match info */}
        <div
          className="
            mt-3
            flex
            flex-wrap
            items-center
            gap-2
            text-xs
            sm:text-sm
          "
        >
          <span className="font-semibold text-green-400">
            {Math.round(movie.vote_average * 10)}% Match
          </span>

          <span className="rounded border border-gray-500 px-1 text-[10px] sm:text-xs">
            U/A 16+
          </span>

          <span className="rounded border border-gray-500 px-1 text-[10px] sm:text-xs">
            HD
          </span>
        </div>

        {/* Genres */}
        {genreNames.length > 0 && (
          <p className="mt-2 text-xs text-gray-300 sm:text-sm">
            {genreNames.join(" • ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieHoverCard;