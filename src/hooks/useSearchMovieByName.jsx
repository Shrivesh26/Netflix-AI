import { useDispatch } from "react-redux";
import { API_OPTION } from "../constants/constant";
import googleGenAI from "../utils/googleGenAI";
import { addGptMovieResult, setGptLoading } from "../redux/Slice/gptSlice";

const useSearchMovieByName = (searchText) => {
  const dispatch = useDispatch();

  const searchMoviesTMDB = async (movie) => {
    const movieDetail = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION,
    );
    const json = await movieDetail.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value.trim();

    if (!query) return;

    dispatch(setGptLoading());

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query :" +
      query +
      ". only give me names of 8 moives, comma seperated like the expample result given ahead. Example Result: Pushpa: The Rise, Animal, Dhurandhar, Mirzapur: The Movies, KGF, KGF 2, Puspha: The Rule, Chup Chup ke";

    const response = await googleGenAI.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: gptQuery,
    });

    const gptMovies = response.text.split(", ");
    const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieName: gptMovies, movieResult: tmdbResult }),
    );
  };

  return handleGptSearchClick;
};

export default useSearchMovieByName;
