import { useNavigate, useRouteError } from "react-router-dom";
import NETFLIX_LOGO from "../asset/NETFLIX-AI.png";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-5 py-10 text-white sm:px-8">
      <div className="w-full max-w-2xl text-center">

        {/* Netflix-style logo */}
        <img
          src={NETFLIX_LOGO}
          alt="NetflixGPT"
          className="mx-auto mb-8 w-40 sm:mb-10 sm:w-60 md:w-80"
        />

        {/* Error Content */}
        <div className="space-y-5 sm:space-y-6">

          {/* Error Code */}
          <p className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl">
            {error?.status || 404} :{" "}
            {error?.statusText || "Page Not Found"}
          </p>

          {/* Heading */}
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            Lost in the streaming universe?
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-lg text-sm leading-6 text-gray-400 sm:text-base md:text-lg">
            We couldn't find the page you're looking for. It may have been
            removed, renamed, or the URL might be incorrect.
          </p>

          {/* Buttons */}
          <div className="flex flex-col justify-center gap-3 pt-3 sm:flex-row sm:gap-4 sm:pt-4">
            <button
              onClick={() => navigate("/")}
              className="
                w-full
                rounded-md
                bg-[#E50914]
                px-7
                py-3
                text-base
                font-semibold
                transition
                duration-200
                hover:bg-[#b20710]
                sm:w-auto
                sm:text-lg
              "
            >
              Go to Home
            </button>

            <button
              onClick={() => navigate(-1)}
              className="
                w-full
                rounded-md
                border
                border-gray-600
                px-7
                py-3
                text-base
                font-semibold
                transition
                duration-200
                hover:bg-white
                hover:text-black
                sm:w-auto
                sm:text-lg
              "
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-gray-600 sm:mt-16 sm:text-sm">
          NetflixGPT • Something went off script.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;