import { createSlice } from "@reduxjs/toolkit";

const playlistsSlice = createSlice({
    name: "playlists",
    initialState: {
        playlistData: {


        }
    },
    reducers: {
        addplaylist: (state, action) => {
            state.playlistData = action.payload;
        }
    },
});
export const { addplaylist } = playlistsSlice.actions;
export default playlistsSlice.reducer

