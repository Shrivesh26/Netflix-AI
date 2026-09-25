import { useEffect, useState } from "react";
import { API_OPTION, VIDEO_URL } from "../constants/constant";

const TRAILER_DELAY = 1000;

const useMovieTrailer = (movieId) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [readyToPlay, setReadyToPlay] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let delayTimer;
    const controller = new AbortController();

    const getMovieTrailer = async () => {
      try {
        const response = await fetch(`${VIDEO_URL}${movieId}/videos`, {
          ...API_OPTION,
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Failed to fetch trailer");

        const data = await response.json();
        const trailer = data.results?.find(
          (v) => v.type === "Trailer" && v.site === "YouTube" && v.key
        );
        if (isMounted) setTrailerKey(trailer?.key || null);
      } catch (error) {
        if (error.name !== "AbortError") console.error("Trailer fetch error:", error);
        if (isMounted) setTrailerKey(null);
      }
    };

    if (movieId) {
      delayTimer = setTimeout(() => {
        if (isMounted) {
          setReadyToPlay(true);
          getMovieTrailer();
        }
      }, TRAILER_DELAY);
    }

    return () => {
      isMounted = false;
      clearTimeout(delayTimer);
      controller.abort();
    };
  }, [movieId]);

  const toggleMute = () => setMuted((m) => !m);

  return { trailerKey, showTrailer: readyToPlay && !!trailerKey, muted, toggleMute };
};

export default useMovieTrailer;