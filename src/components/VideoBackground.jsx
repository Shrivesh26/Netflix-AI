import { useSelector } from "react-redux";
import useTrailerId from "../hooks/useTrailerId";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector(
    (store) => store.movies?.movieTrailerId
  );

  useTrailerId(movieId);

  if (!trailerId) {
    return (
      <div className="absolute inset-0 z-0 bg-black" />
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <iframe
        className="
          absolute
          left-1/2
          top-1/2
          aspect-video
          w-[177.78vh]
          min-w-full
          -translate-x-1/2
          -translate-y-1/2
          scale-110
          sm:scale-115
          md:scale-125
        "
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&loop=1&playlist=${trailerId}&controls=0&modestbranding=1&rel=0`}
        title="Movie Trailer"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;