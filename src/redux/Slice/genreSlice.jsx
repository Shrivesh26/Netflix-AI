import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_OPTION, GENRES_API } from "../../constants/constant";

export const fetchGenres = createAsyncThunk("genres/fetch", async () => {
  const response = await fetch(
    GENRES_API,
    API_OPTION
  );
  if (!response.ok) throw new Error("Failed to fetch genres");
  const data = await response.json();

  // Store as a lookup map: { 28: "Action", 12: "Adventure", ... }
  return data.genres.reduce((map, genre) => {
    map[genre.id] = genre.name;
    return map;
  }, {});
});

const genreSlice = createSlice({
  name: "genres",
  initialState: { map: {}, status: "idle" }, // status: idle | loading | succeeded | failed
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.map = action.payload;
      })
      .addCase(fetchGenres.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default genreSlice.reducer;