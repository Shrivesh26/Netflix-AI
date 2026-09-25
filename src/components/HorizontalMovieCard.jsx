import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IMAGE_URL } from "../constants/constant";
import MovieHoverCard from "./MovieHoverCard";
import useHoverPopup from "../hooks/useHoverPopup";

const EDGE_MARGIN = 12;

const HorizontalMovieCard = ({ movie }) => {
  const {
    cardRef,
    showPopup,
    animateIn,
    coords,
    open,
    close,
  } = useHoverPopup();

  const popupRef = useRef(null);
  const [correctedTop, setCorrectedTop] = useState(null);
  const [correctedLeft, setCorrectedLeft] = useState(null);

  if (!movie.backdrop_path && !movie.poster_path) {
    return null;
  }

  useLayoutEffect(() => {
    if (!showPopup || !coords || !popupRef.current) {
      setCorrectedTop(null);
      setCorrectedLeft(null);
      return;
    }

    const rect = popupRef.current.getBoundingClientRect();

    // Vertical correction
    const overflowBottom =
      rect.bottom - (window.innerHeight - EDGE_MARGIN);

    if (overflowBottom > 0) {
      const adjustedTop = Math.max(
        coords.top - overflowBottom,
        EDGE_MARGIN,
      );

      setCorrectedTop(adjustedTop);
    } else {
      setCorrectedTop(
        Math.max(coords.top, EDGE_MARGIN),
      );
    }

    // Horizontal correction
    const overflowRight =
      rect.right - (window.innerWidth - EDGE_MARGIN);

    const overflowLeft = EDGE_MARGIN - rect.left;

    if (overflowRight > 0) {
      setCorrectedLeft(
        Math.max(
          coords.left - overflowRight,
          EDGE_MARGIN,
        ),
      );
    } else if (overflowLeft > 0) {
      setCorrectedLeft(
        EDGE_MARGIN,
      );
    } else {
      setCorrectedLeft(coords.left);
    }
  }, [showPopup, coords]);

  const top = correctedTop ?? coords?.top;
  const left = correctedLeft ?? coords?.left;

  return (
    <div
      ref={cardRef}
      className="
        relative
        w-[240px]
        flex-shrink-0
        sm:w-[280px]
        md:w-80
      "
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <img
        src={
          IMAGE_URL +
          (movie.backdrop_path || movie.poster_path)
        }
        alt={movie.title}
        loading="lazy"
        className="
          aspect-video
          w-full
          rounded-md
          object-cover
        "
      />

      {showPopup &&
        coords &&
        createPortal(
          <div
            ref={popupRef}
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={close}
            style={{
              position: "fixed",
              top,
              left,
              width: coords.width,
              maxWidth: "calc(100vw - 24px)",
            }}
            className={`
              z-[999]
              origin-center
              transition-all
              duration-200
              ease-out
              ${
                animateIn
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-90 opacity-0"
              }
            `}
          >
            <MovieHoverCard movie={movie} />
          </div>,
          document.body,
        )}
    </div>
  );
};

export default HorizontalMovieCard;