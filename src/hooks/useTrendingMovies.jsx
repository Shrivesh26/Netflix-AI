import { useEffect } from "react";
import { API_OPTION, TRENDING_MOVIES_URL } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../redux/Slice/moviesSlice";

const useTrendingMovies = () => {

  const dispatch = useDispatch();
  const movie = useSelector(store=> store.movies.trendingMovies);

  const getNowPlayingMovies = async () => {
    const response = await fetch(TRENDING_MOVIES_URL, API_OPTION);
    const data = await response.json();
    dispatch(addTrendingMovies(data.results));
  };

  useEffect(() => {
    !movie && getNowPlayingMovies();
  }, []);
};

export default useTrendingMovies;