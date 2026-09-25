import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
    return null;
  }

  const mainMovie = nowPlayingMovies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <main
      className="
        relative
        min-h-[70vh]
        w-full
        overflow-hidden
        bg-black

        sm:min-h-[75vh]
        md:min-h-[85vh]
        lg:h-screen
        lg:min-h-[700px]
      "
    >
      {/* Video */}
      <VideoBackground movieId={id} />

      {/* Left dark overlay */}
      <div
        className="
          absolute
          inset-0
          z-10
          bg-gradient-to-r
          from-black
          via-black/60
          to-transparent
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-10
          h-40
          w-full
          bg-gradient-to-t
          from-black
          via-black/70
          to-transparent

          sm:h-48
          md:h-56
          lg:h-64
        "
      />

      {/* Movie information */}
      <VideoTitle
        title={original_title}
        overview={overview}
      />
    </main>
  );
};

export default MainContainer;