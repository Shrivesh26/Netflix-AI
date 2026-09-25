import { useEffect } from "react";
import { API_OPTION, NOW_PLAYING_MOVIES_URL } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/Slice/moviesSlice";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();
  const movie = useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const response = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTION);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    !movie && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;