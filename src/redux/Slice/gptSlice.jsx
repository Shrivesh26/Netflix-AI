import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
    movieResult: null,
    movieName: null,
    isLoading: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },

    setGptLoading: (state) => {
      state.isLoading = true;
    },

    addGptMovieResult: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movieResult = movieResult;
      state.movieName = movieName;
      state.isLoading = false;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, setGptLoading } = gptSlice.actions;

export default gptSlice.reducer;
