import { useCallback, useEffect, useRef, useState } from "react";

const POPUP_DELAY = 500;
const CLOSE_DELAY = 150;
const SCALE = 1.4;
const EDGE_MARGIN = 12;

const useHoverPopup = () => {
  const cardRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [coords, setCoords] = useState(null);

  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const animFrame = useRef(null);

  const close = useCallback(() => {
    clearTimeout(openTimer.current);
    cancelAnimationFrame(animFrame.current);
    setAnimateIn(false);
    closeTimer.current = setTimeout(() => setShowPopup(false), CLOSE_DELAY);
  }, []);

  const closeImmediately = useCallback(() => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
    cancelAnimationFrame(animFrame.current);
    setAnimateIn(false);
    setShowPopup(false);
  }, []);

  const open = useCallback(() => {
    clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width * SCALE;
      const height = rect.height * SCALE;

      let left = rect.left - (width - rect.width) / 2;
      let top = rect.top - (height - rect.height) / 2;

      // Clamp horizontally so the popup never crosses the viewport edges
      const maxLeft = window.innerWidth - width - EDGE_MARGIN;
      left = Math.min(Math.max(left, EDGE_MARGIN), Math.max(maxLeft, EDGE_MARGIN));

      // Clamp vertically the same way
      const maxTop = window.innerHeight - height - EDGE_MARGIN;
      top = Math.min(Math.max(top, EDGE_MARGIN), Math.max(maxTop, EDGE_MARGIN));

      setCoords({ top, left, width });
      setShowPopup(true);
      animFrame.current = requestAnimationFrame(() => setAnimateIn(true));
    }, POPUP_DELAY);
  }, []);

  useEffect(() => {
    if (!showPopup) return;

    window.addEventListener("scroll", closeImmediately, true);
    return () => window.removeEventListener("scroll", closeImmediately, true);
  }, [showPopup, closeImmediately]);

  useEffect(() => {
    return () => {
      clearTimeout(openTimer.current);
      clearTimeout(closeTimer.current);
      cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return { cardRef, showPopup, animateIn, coords, open, close };
};

export default useHoverPopup;