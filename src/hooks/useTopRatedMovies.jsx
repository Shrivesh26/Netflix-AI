import { API_OPTION, TOP_RATED_MOVIES_URL } from "../constants/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/Slice/moviesSlice";

const useTopRatedMovies = () => {

  const dispatch = useDispatch();
  const movie = useSelector(store => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const response = await fetch(TOP_RATED_MOVIES_URL, API_OPTION);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    !movie && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;