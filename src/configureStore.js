import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";

import playlistsSlice from "./store/playlistsSlice";
import tokenSlice from "./store/tokenSlice";
import uplaylistsSlice from "./store/uplaylistsSlice";
import memberSlice from "./store/memberSlice";
import playlistIdSlice from "./store/playlistIdSlice";
import playingSlice from "./store/playingSlice";
import playSlice from "./store/playSlice";




const rootReducer = combineReducers({

    playlists: playlistsSlice,
    token: tokenSlice,
    uplaylist: uplaylistsSlice,
    member: memberSlice,
    playlistId: playlistIdSlice,
    current: playingSlice,
    playstate: playSlice,

});

const middleware = (getDefaultMiddleware) =>
    import.meta.env.MODE !== "production" ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware();


const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: import.meta.env.MODE !== "production",
});

export const useAppDispatch = () => useDispatch();

export default store;