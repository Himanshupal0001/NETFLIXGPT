import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlaying: null,
    trailer: null,
    movieList: {}
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
            const { key, data } = action.payload;
            state.movieList[key] = data;
        }
    }
})
export const { addNowPlayingMovies, addTrailer, getMovieList } = movieSlice.actions;
export default movieSlice.reducer;