import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
    name: "members",
    initialState: {
        memberData: {
        },
        token: null,
        selectedPlaylistId: "",
        selectedPlaylist: null,
        currentPlaying: null,
        playerState: false,
    },
    reducers: {


        setPlaying(state, action) {
            state.currentPlaying = action.payload;
        },
        setPlayerState(state, action) {
            state.playerState = action.payload;
        },


    },
});
export const {
    setPlaying,
    setPlayerState,

} = membersSlice.actions;

export default membersSlice.reducer

