import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlaying: null,
    trailer: null,
    movieList: null
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload
        },
        getMovieList: (state, action) => {
            state.movieList = action.payload;
        }
    }
})
export const { addNowPlayingMovies, addTrailer, getMovieList } = movieSlice.actions;
export default movieSlice.reducer;