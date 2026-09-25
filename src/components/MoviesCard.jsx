import { IMAGE_URL } from "../constants/constant";

const MoviesCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="
        w-[120px]
        flex-shrink-0
        overflow-hidden
        rounded-lg
        p-1
        sm:w-36
        md:w-44
        lg:w-48
      "
    >
      <img
        src={IMAGE_URL + posterPath}
        alt="Movie poster"
        className="
          h-[180px]
          w-full
          rounded-lg
          object-cover
          transition-transform
          duration-300
          sm:h-[216px]
          md:h-[264px]
          lg:h-[288px]
        "
      />
    </div>
  );
};

export const NumberOnMoviesCard = (MoviesCard) => {
  return ({ number, posterPath }) => {
    return (
      <div
        className="
          relative
          ml-3
          transition-transform
          duration-300
          hover:scale-105
          sm:ml-4
        "
      >
        {/* Ranking Number */}
        <div
          className="
            absolute
            bottom-1
            -left-3
            z-10
            font-['Arial']
            text-6xl
            font-extrabold
            leading-none
            text-black
            [-webkit-text-stroke:1.5px_white]
            sm:-left-4
            sm:text-7xl
            md:-left-5
            md:text-8xl
          "
        >
          {number}
        </div>

        <MoviesCard posterPath={posterPath} />
      </div>
    );
  };
};

export default MoviesCard;