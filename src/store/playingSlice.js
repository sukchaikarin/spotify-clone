import { createSlice } from "@reduxjs/toolkit";

const playingSlice = createSlice({
    name: "current",
    initialState: {
        current: false,
    },
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload;
        }
    },
});
export const { setCurrent } = playingSlice.actions;
export default playingSlice.reducer