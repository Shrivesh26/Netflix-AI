import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../redux/Slice/genreSlice";

const useGenres = () => {
  const dispatch = useDispatch();
  const { map, status } = useSelector((state) => state.genres);

  useEffect(() => {
    if (status === "idle") dispatch(fetchGenres());
  }, [status, dispatch]);

  const getGenreNames = (genreIds = []) =>
    genreIds.map((id) => map[id]).filter(Boolean);

  return { getGenreNames, isReady: status === "succeeded" };
};

export default useGenres;