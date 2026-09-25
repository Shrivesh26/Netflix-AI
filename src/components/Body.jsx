import Background from "./Background";
import MoviesCard, { NumberOnMoviesCard } from "./MoviesCard";
import ReasonForJoin from "./ReasonForJoin";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";

const Body = () => {
  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const openEmailInput = () => {
    const emailInput = document.getElementById("email");

    if (emailInput) {
      emailInput.focus();
    }
  };

  usePopularMovies();

  const NumOnMovies = NumberOnMoviesCard(MoviesCard);

  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[90vh] w-full items-center justify-center sm:min-h-[95vh]">
        <Background />

        <div
          className="
            w-full
            max-w-6xl
            px-5
            text-center
            sm:px-8
            lg:px-12
          "
        >
          {/* Main Heading */}
          <h1
            className="
              text-3xl
              font-bold
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
          "
          >
            Unlimited movies, shows, and more
          </h1>

          {/* Pricing */}
          <p
            className="
              mt-4
              text-base
              font-bold
              text-white
              sm:mt-5
              sm:text-xl
              md:text-2xl
          "
          >
            Plans start at ₹149. Cancel anytime.
          </p>

          {/* CTA Text */}
          <h2
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-6
              text-white
              sm:mt-10
              sm:text-lg
              md:text-xl
          "
          >
            Ready to watch? Enter your email to start your membership.
          </h2>

          {/* Email + Button */}
          <div
            className="
              mx-auto
              mt-6
              flex
              w-full
              max-w-3xl
              flex-col
              items-stretch
              gap-3
              sm:mt-8
              sm:flex-row
              sm:items-center
              sm:justify-center
              sm:gap-3
          "
          >
            {/* Floating Input */}
            <div className="relative w-full sm:w-[380px]">
              <input
                id="email"
                type="email"
                placeholder=" "
                className="
                  peer
                  h-14
                  w-full
                  rounded-md
                  border
                  border-gray-500
                  bg-black/50
                  px-4
                  pt-6
                  pb-2
                  text-base
                  text-white
                  outline-none
                  transition
                  focus:border-white
                  sm:h-16
                  sm:text-lg
                "
              />

              <label
                htmlFor="email"
                className="
                  absolute
                  left-4
                  top-4
                  origin-[0]
                  text-sm
                  text-gray-400
                  transition-all

                  peer-placeholder-shown:top-4
                  peer-placeholder-shown:text-base

                  peer-focus:top-1
                  peer-focus:text-xs

                  peer-[:not(:placeholder-shown)]:top-2
                  peer-[:not(:placeholder-shown)]:text-xs

                  sm:text-base
                "
              >
                Email address
              </label>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={openEmailInput}
              className="
                flex
                h-14
                w-full
                items-center
                justify-center
                rounded-md
                bg-red-600
                px-5
                text-lg
                font-semibold
                text-white
                transition
                hover:bg-red-700
                sm:h-16
                sm:w-auto
                sm:min-w-[250px]
                sm:px-7
                sm:text-xl
              "
            >
              <span>Try 14 Days for ₹0</span>

              <span className="ml-3 text-3xl leading-none">
                ›
              </span>
            </button>
          </div>

          {/* Disclaimer */}
          <p
            className="
              mt-4
              text-sm
              text-gray-300
              sm:mt-5
              sm:text-base
              md:text-lg
            "
          >
            New members only. Terms below.
          </p>
        </div>
      </section>

      {/* ================= MOVIES SECTION ================= */}
      <section
        className="
          relative
          -mt-6
          bg-black
          pt-14
          pb-10
          sm:-mt-8
          sm:pt-16
        "
      >
        {/* CURVED TOP BORDER */}
        <div
          className="
            absolute
            -top-[20px]
            left-[-10%]
            h-16
            w-[120%]
            rounded-[50%]
            border-t-4
            border-red-600
            bg-gradient-to-b
            from-gray-800
            to-black
            sm:-top-[25px]
            sm:h-20
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1600px]
            px-5
            sm:px-8
            lg:px-12
            xl:px-16
          "
        >
          {/* Section Heading */}
          <h2
            className="
              mb-5
              text-2xl
              font-semibold
              text-white
              sm:mb-6
              sm:text-3xl
              md:text-4xl
            "
          >
            Trending Now
          </h2>

          {/* Movies */}
          <div
            className="
              movie-scroll
              flex
              gap-5
              overflow-x-auto
              overflow-y-hidden
              scroll-smooth
              rounded-lg
              pb-4
              sm:gap-8
              md:gap-10
              lg:gap-12
              xl:gap-14
            "
          >
            {popularMovies?.map((movie, index) => (
              <NumOnMovies
                key={movie.id}
                number={index + 1}
                posterPath={movie.poster_path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= REASONS FOR JOINING ================= */}
      <ReasonForJoin />
    </div>
  );
};

export default Body;