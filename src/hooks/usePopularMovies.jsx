import { API_OPTION, POPULAR_MOVIES_URL } from "../constants/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/Slice/moviesSlice";

const usePopularMovies = () => {

  const dispatch = useDispatch();
  const movie = useSelector(store => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const response = await fetch(POPULAR_MOVIES_URL, API_OPTION);
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    !movie && getPopularMovies();
  }, []);
};

export default usePopularMovies;