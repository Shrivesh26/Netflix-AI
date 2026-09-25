import { useRef } from "react";
import useSearchMovieByName from "../hooks/useSearchMovieByName";

const GPTSearchBar = ({ hasSearched }) => {
  const searchText = useRef(null);

  const handleGptSearchClick = useSearchMovieByName(searchText);

  return (
    <div
      className={`
        w-full
        px-4
        sm:px-6
        md:px-8
        transition-all
        duration-500
        ease-out
        ${
          hasSearched
            ? "pt-4 sm:pt-6 md:pt-8"
            : "flex flex-1 items-center justify-center"
        }
      `}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearchClick();
        }}
        className="
          flex
          w-full
          max-w-3xl
          flex-col
          gap-2
          sm:grid
          sm:grid-cols-12
        "
      >
        <input
          ref={searchText}
          autoFocus
          type="text"
          placeholder="What would you like to watch today?"
          className="
            h-12
            w-full
            rounded-lg
            border
            border-white/10
            bg-white/95
            px-4
            text-sm
            text-black
            shadow-lg
            outline-none
            ring-red-600
            transition
            focus:ring-2

            sm:col-span-9
            sm:h-13
            sm:text-base

            md:h-14
            md:text-lg
          "
        />

        <button
          type="submit"
          className="
            h-12
            w-full
            rounded-lg
            bg-red-700
            px-4
            text-sm
            font-semibold
            text-white
            shadow-lg
            transition
            hover:bg-red-800
            active:scale-[0.98]

            sm:col-span-3
            sm:h-13

            md:h-14
            md:text-base
          "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;