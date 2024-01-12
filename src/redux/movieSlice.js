import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlaying: null,
    trailer: null
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
        }
    }
})
export const { addNowPlayingMovies, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;