import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  const [showOverview, setShowOverview] = useState(true);

  const timerRef = useRef(null);

  const startHideTimer = () => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setShowOverview(false);
    }, 5000);
  };

  useEffect(() => {
    startHideTimer();

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [title]);

  const handleMouseEnter = () => {
    setShowOverview(true);
    startHideTimer();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="
        absolute
        left-0
        top-[58%]
        z-20
        w-full
        -translate-y-1/2
        px-5
        sm:top-[58%]
        sm:px-8
        md:top-[55%]
        md:w-[65%]
        md:px-12
        lg:w-[50%]
        lg:px-16
        xl:w-[45%]
      "
    >
      {/* Title */}
      <h1
        className="
          max-w-3xl
          text-3xl
          font-bold
          leading-tight
          text-white
          drop-shadow-2xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
      >
        {title}
      </h1>

      {/* Description */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          showOverview
            ? "mt-4 max-h-32 opacity-100 sm:mt-5 sm:max-h-38"
            : "mt-0 max-h-0 opacity-0"
        }`}
      >
        <p
          className="
            max-w-2xl
            text-sm
            leading-relaxed
            text-white
            drop-shadow-lg
            sm:text-base
            md:text-lg
          "
        >
          {overview}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
        <button
          className="
            flex
            h-11
            items-center
            gap-2
            rounded-md
            bg-white
            px-4
            text-sm
            font-bold
            text-black
            transition
            hover:bg-gray-300
            sm:h-12
            sm:px-6
            sm:text-base
          "
        >
          <FaPlay className="text-xs sm:text-sm" />
          Play
        </button>

        <button
          className="
            flex
            h-11
            items-center
            gap-2
            rounded-md
            bg-gray-500/80
            px-4
            text-sm
            font-bold
            text-white
            transition
            hover:bg-gray-500
            sm:h-12
            sm:px-6
            sm:text-base
          "
        >
          <IoInformationCircleOutline className="text-xl sm:text-2xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;