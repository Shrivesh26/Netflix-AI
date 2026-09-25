import { API_OPTION, UPCOMING_MOVIES_URL } from "../constants/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/Slice/moviesSlice";

const useUpcomingMovies = () => {

  const dispatch = useDispatch();
  const movie = useSelector(store=> store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const response = await fetch(UPCOMING_MOVIES_URL, API_OPTION);
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    !movie && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;