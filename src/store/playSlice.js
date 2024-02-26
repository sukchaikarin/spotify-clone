import { createSlice } from "@reduxjs/toolkit";

const playSlice = createSlice({
    name: "playstate",
    initialState: {
        playstate: false,
    },
    reducers: {
        setPlay: (state, action) => {
            state.playstate = action.payload;
        }
    },
});
export const { setPlay } = playSlice.actions;
export default playSlice.reducer