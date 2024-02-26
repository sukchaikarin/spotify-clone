import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
    name: "members",
    initialState: {
        memberData: {
        },
        token: null,
        playlists: [],
        userInfo: null,
        selectedPlaylistId: "",
        selectedPlaylist: null,
        currentPlaying: null,
        playerState: false,
    },
    reducers: {
        addMember: (state, action) => {
            state.memberData = action.payload;
        },
        setUser(state, action) {
            state.userInfo = action.payload;
        },

        setPlaying(state, action) {
            state.currentPlaying = action.payload;
        },
        setPlayerState(state, action) {
            state.playerState = action.payload;
        },
        setPlaylist(state, action) {
            state.selectedPlaylist = action.payload;
        },
        setPlaylistId(state, action) {
            state.selectedPlaylistId = action.payload;
        },
    },
});
export const {
    addMember,
    setUser,
    setPlaylists,
    setPlaying,
    setPlayerState,
    setPlaylist,
    setPlaylistId,
} = membersSlice.actions;

export default membersSlice.reducer

