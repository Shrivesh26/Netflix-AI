import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/userSlice";
import moviesReducer from "../Slice/moviesSlice";
import genresReducer from "../Slice/genreSlice";
import gptReducer from "../Slice/gptSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        genres: genresReducer,
        gpt: gptReducer
    },
});

export default appStore;