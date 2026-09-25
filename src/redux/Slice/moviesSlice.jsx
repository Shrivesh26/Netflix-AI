import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        movieTrailerId: null,
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trendingMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },

        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload;
        },

        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload;
        },

        addTrendingMovies: (state, action)=>{
            state.trendingMovies = action.payload;
        },

        addMovieTrailer: (state, action)=>{
            state.movieTrailerId = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieTrailer, addTrendingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;