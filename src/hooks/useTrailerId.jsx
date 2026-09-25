import { useEffect } from "react";
import { API_OPTION, VIDEO_URL } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../redux/Slice/moviesSlice";

const useTrailerId = (movieId) => {
  const dispatch = useDispatch();
  const trailerId = useSelector(store=> store.movies.movieTrailerId);

  const getMoviesVideo = async () => {
    const data = await fetch(`${VIDEO_URL}${movieId}/videos`, API_OPTION);
    const json = await data.json();

    const filterVideo = json.results.filter((data) => data.type === "Trailer");
    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];

    dispatch(addMovieTrailer(trailer.key));
  };

  useEffect(() => {
    !trailerId && getMoviesVideo();
  }, []);
};


export default useTrailerId;