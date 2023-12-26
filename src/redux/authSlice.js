import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = {};
        },
    },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;