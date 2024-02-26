import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import membersSlice from "./store/membersSlice";
import playlistsSlice from "./store/playlistsSlice";
import tokenSlice from "./store/tokenSlice";
import uplaylistsSlice from "./store/uplaylistsSlice";
import memberSlice from "./store/memberSlice";



const rootReducer = combineReducers({
    members: membersSlice,
    playlists: playlistsSlice,
    token: tokenSlice,
    uplaylist: uplaylistsSlice,
    member: memberSlice,

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