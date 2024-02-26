import { createSlice } from "@reduxjs/toolkit";

const playlistIdSlice = createSlice({
    name: "playlistId",
    initialState: {
        playlistId: "",
    },
    reducers: {
        setPlaylistId(state, action) {
            state.playlistId = action.payload;
        },
    },
});
export const { setPlaylistId } = playlistIdSlice.actions;
export default playlistIdSlice.reducer