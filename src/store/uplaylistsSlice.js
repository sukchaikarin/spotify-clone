import { createSlice } from "@reduxjs/toolkit";

const uplaylistsSlice = createSlice({
    name: "uplaylist",
    initialState: {
        playlists: [],
    },
    reducers: {
        setPlaylists(state, action) {
            state.playlists = action.payload;
        },
    },
});
export const { setPlaylists } = uplaylistsSlice.actions;
export default uplaylistsSlice.reducer